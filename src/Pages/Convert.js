import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-input-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import ybot from '../Models/ybot/ybot.glb';
import * as words from '../Animations/words';
import * as alphabets from '../Animations/alphabets';
import { defaultPose } from '../Animations/defaultPose';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import posTagger from 'wink-pos-tagger';

function Convert() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);
  const [inputMode, setInputMode] = useState('text');

  const componentRef = useRef({});
  const { current: ref } = componentRef;
  const textFromAudio = useRef(null);
  const textFromInput = useRef(null);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0x2b2b2b);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    ref.scene.add(spotLight);

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.camera = new THREE.PerspectiveCamera(
      30,
      (window.innerWidth * 0.7) / (window.innerHeight - 60),
      0.1,
      1000
    );
    ref.renderer.setSize(window.innerWidth * 0.56, window.innerHeight * 0.7);

    const canvasContainer = document.getElementById('canvas');
    canvasContainer.innerHTML = '';
    canvasContainer.appendChild(ref.renderer.domElement);

    ref.camera.position.z = 1.6;
    ref.camera.position.y = 1.4;

    const loader = new GLTFLoader();
    loader.load(
      ybot,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.type === 'SkinnedMesh') {
            child.frustumCulled = false;
          }
        });
        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
        defaultPose(ref);
      },
      (xhr) => {
        console.log('Loading progress:', (xhr.loaded / xhr.total) * 100 + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  }, [ref]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);

    if (ref.animations[0].length) {
      if (!ref.flag) {
        for (let i = 0; i < ref.animations[0].length;) {
          const [boneName, action, axis, limit, sign] = ref.animations[0][i];
          const bone = ref.avatar.getObjectByName(boneName);

          if (sign === '+' && bone[action][axis] < limit) {
            bone[action][axis] += speed;
            bone[action][axis] = Math.min(bone[action][axis], limit);
            i++;
          } else if (sign === '-' && bone[action][axis] > limit) {
            bone[action][axis] -= speed;
            bone[action][axis] = Math.max(bone[action][axis], limit);
            i++;
          } else {
            ref.animations[0].splice(i, 1);
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => {
        ref.flag = false;
      }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  const sign = (inputRef) => {
    const sentences = inputRef.current.value
      .split(/[.?!]/)
      .filter(sentence => sentence.trim() !== '');
    const processedSentences = sentences.map(sentence => {
      const tagger = posTagger();
      const taggedWords = tagger.tagSentence(sentence.trim());
      const verbTags = ["VB", "VBD", "VBG", "VBN", "VBP", "VBZ"];
      const rearrangedWords = taggedWords.reduce((acc, word) => {
        if (verbTags.includes(word.pos)) {
          if (word.lemma && !['be'].includes(word.lemma)) {
            acc.verbs.push({ ...word, value: word.lemma || word.value });
          }
        } else if (word.pos === 'WP' || word.pos.startsWith('WH') || word.pos.startsWith('WR')) {
          acc.whWords.push(word);
        } else if (['NN', 'NNS', 'NNP', 'NNPS', 'PRP', 'JJ', 'JJR', 'JJS'].includes(word.pos)) {
          if (acc.subjects.length === 0) {
            acc.subjects.push(word);
          } else {
            acc.objects.push(word);
          }
        }
        return acc;
      }, { subjects: [], objects: [], verbs: [], whWords: [] });
      const processedSentence = [
        ...rearrangedWords.whWords,
        ...rearrangedWords.subjects,
        ...rearrangedWords.objects,
        ...rearrangedWords.verbs,

      ];
      return processedSentence
        .map(word => word.value.toUpperCase())
        .join(' ');
    });
    setText(processedSentences.join('. '));
    processedSentences.forEach(sentence => {
      const sentenceWords = sentence.split(' ');
      sentenceWords.forEach((word) => {
        if (words[word]) {
          words[word](ref);
        } else {
          word.split('').forEach((ch) => {
            alphabets[ch](ref);
          });
        }
      });
    });
  };


  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className={`toggle-switch ${inputMode === 'text' ? 'text-active' : 'speech-active'}`}>
            <button
              className={inputMode === 'text' ? 'active' : ''}
              onClick={() => setInputMode('text')}
            >
              Text
            </button>
            <button
              className={inputMode === 'speech' ? 'active' : ''}
              onClick={() => setInputMode('speech')}
            >
              Speech
            </button>
          </div>

          {inputMode === 'text' && (
            <>
              <label className="label-style">Text Input</label>
              <textarea
                rows={3}
                ref={textFromInput}
                placeholder="Enter text here..."
                className="w-100 input-style"
              />
              <button
                onClick={() => sign(textFromInput)}
                className="animated-button"
              >
                <span className="text">Start Animations</span>
                <div className="circle"></div>
              </button>
            </>
          )}

          {inputMode === 'speech' && (
            <>
              <label className="label-style">
                Speech Recognition: {listening ? 'ON' : 'OFF'}
              </label>
              <div className="space-between">
                <button
                  className="animated-button small-animated-button w-33"
                  onClick={toggleListening}
                >
                  <span className="text">{listening ? 'Mic Off' : 'Mic On'}</span>
                  <div className="circle"></div>
                  <i className={`fa fa-microphone${listening ? '' : '-slash'}`} />
                </button>
                <button
                  className="animated-button small-animated-button w-33"
                  onClick={resetTranscript}
                >
                  <span className="text">Clear</span>
                  <div className="circle"></div>
                </button>
              </div>
              <textarea
                rows={3}
                ref={textFromAudio}
                value={transcript}
                placeholder="Speech input will appear here..."
                className="w-100 input-style"
              />
              <button
                onClick={() => sign(textFromAudio)}
                className="animated-button"
              >
                <span className="text">Start Animations</span>
                <div className="circle"></div>
              </button>
            </>
          )}

          <div>
            <p className="label-style">Animation Speed: {Math.round(speed * 100) / 100}</p>
            <Slider
              axis="x"
              xmin={0.05}
              xmax={0.5}
              xstep={0.01}
              x={speed}
              onChange={({ x }) => setSpeed(x)}
              className="w-100"
            />
            <p className="label-style">Pause Time: {pause} ms</p>
            <Slider
              axis="x"
              xmin={0}
              xmax={2000}
              xstep={100}
              x={pause}
              onChange={({ x }) => setPause(x)}
              className="w-100"
            />
          </div>
        </div>

        <div className="col-md-1 vertical-divider"></div>

        <div className="col-md-7">
          <div className="processed-text-container">
            <label className="label-style processed-text-label">Processed Text:</label>
            <textarea
              rows={3}
              value={text}
              className="processed-text-box"
              readOnly
            />
          </div>

          <div id="canvas" />
        </div>
      </div>
    </div>
  );
}

export default Convert;