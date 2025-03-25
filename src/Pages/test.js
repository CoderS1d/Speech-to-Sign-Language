import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import avatarModel from "../Models/Ch41_nonPBR.fbx"; // Ensure the correct path

const LoadAvatar = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const avatarRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const camera = new THREE.PerspectiveCamera(55, 1.2, 0.1, 1000); // Adjusted aspect ratio for better framing
    camera.position.set(0, 1.5, 2); // Closer to the model to capture waist-up

    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.7);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(3, 3, 3);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Load FBX Model
    const loader = new FBXLoader();
    loader.load(
      avatarModel,
      (fbx) => {
        fbx.scale.set(0.015, 0.015, 0.015); // Increased scale for better visibility
        fbx.position.set(0, -1.5, 0); // Lowered model slightly to keep waist-up in view
        avatarRef.current = fbx;
        scene.add(fbx);
      },
      (xhr) => {
        console.log(`Loading Progress: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`);
      },
      (error) => {
        console.error("Error loading FBX model:", error);
      }
    );

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 1.5; // Prevents zooming out too much
    controls.maxDistance = 2.5; // Limits zoom for waist-up framing

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} id="avatar-container" />;
};

export default LoadAvatar;
