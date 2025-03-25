import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-input-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import ybot from '../Models/SkinnyDroid.fbx'; // Only Y Bot is used
import * as words from '../Animations/words';
import * as alphabets from '../Animations/alphabets';
import { defaultPose } from '../Animations/defaultPosefbx';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Convert() {
  // State variables
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);
  const [inputMode, setInputMode] = useState('text'); // 'text' or 'speech'

  // Refs for DOM elements and Three.js objects
  const componentRef = useRef({});
  const { current: ref } = componentRef;
  const textFromAudio = useRef(null);
  const textFromInput = useRef(null);

  // Speech recognition hook
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // Initialize Three.js scene and load the avatar
  useEffect(() => {
    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    // Set up Three.js scene
    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdd0000); //canvas

    // Add lighting
    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    ref.scene.add(spotLight);

    // Set up renderer
    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.camera = new THREE.PerspectiveCamera(
      30,
      (window.innerWidth * 0.7) / (window.innerHeight - 60),
      0.1,
      1000
    );
    ref.renderer.setSize(window.innerWidth * 0.56, window.innerHeight * 0.7); // for canvas size

    // Append renderer to the DOM
    const canvasContainer = document.getElementById('canvas');
    canvasContainer.innerHTML = '';
    canvasContainer.appendChild(ref.renderer.domElement);

    // Position the camera
    ref.camera.position.z = 1.6;
    ref.camera.position.y = 1.4;

    // Load the Y Bot avatar
    const loader = new FBXLoader();
    loader.load(
      ybot, // Ensure the path is correct
      (fbx) => {
        fbx.scale.set(0.05, 0.05, 0.05); // Increase or decrease size
        fbx.position.set(0, -0.3, 0);  // Adjust position if it's not visible
        ref.avatar = fbx;
        ref.scene.add(ref.avatar);
        defaultPose(ref); // Set default pose
      },
      (xhr) => {
        console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  }, [ref]);

  // Animation loop
  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);

    if (ref.animations[0].length) {
      if (!ref.flag) {
        for (let i = 0; i < ref.animations[0].length; ) {
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

  // Process input text or speech
  const sign = (inputRef) => {
    const str = inputRef.current.value.toUpperCase();
    const strWords = str.split(' ');
    setText(str); // Directly set the input text to the state

    strWords.forEach((word) => {
      if (words[word]) {
        words[word](ref); // Add word animation to the queue
      } else {
        word.split('').forEach((ch) => {
          alphabets[ch](ref); // Add alphabet animation to the queue
        });
      }
    });
  };

  // Start/stop speech recognition
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
        {/* Left Column: Input Details */}
        <div className="col-md-4">
          {/* Toggle Switch for Text and Speech */}
          <div className="toggle-switch">
            <button
              className={`btn ${inputMode === 'text' ? 'btn-primary active' : 'btn-secondary inactive'}`}
              onClick={() => setInputMode('text')}
            >
              Text
            </button>
            <button
              className={`btn ${inputMode === 'speech' ? 'btn-primary active' : 'btn-secondary inactive'}`}
              onClick={() => setInputMode('speech')}
            >
              Speech
            </button>
          </div>

          {/* Text Input Section */}
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
                className="btn btn-primary w-100 btn-style btn-start"
              >
                Start Animations
              </button>
            </>
          )}

          {/* Speech Input Section */}
          {inputMode === 'speech' && (
            <>
              <label className="label-style">
                Speech Recognition: {listening ? 'ON' : 'OFF'}
              </label>
              <div className="space-between">
                <button
                  className="btn btn-primary btn-style w-33"
                  onClick={toggleListening}
                >
                  {listening ? 'Mic Off' : 'Mic On'} <i className={`fa fa-microphone${listening ? '' : '-slash'}`} />
                </button>
                <button
                  className="btn btn-primary btn-style w-33"
                  onClick={resetTranscript}
                >
                  Clear
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
                className="btn btn-primary w-100 btn-style btn-start"
              >
                Start Animations
              </button>
            </>
          )}

          {/* Animation Controls */}
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

        {/* Vertical Divider */}
        <div className="col-md-1 vertical-divider"></div>

        {/* Right Column: Processed Text and Avatar */}
        <div className="col-md-7">
          {/* Processed Text and Text Box */}
          <div className="processed-text-container">
            <label className="label-style processed-text-label">Processed Text:</label>
            <textarea
              rows={3}
              value={text}
              className="processed-text-box"
              readOnly
            />
          </div>

          {/* Canvas for Avatar */}
          <div id="canvas" />
        </div>
      </div>
    </div>
  );
}

export default Convert;