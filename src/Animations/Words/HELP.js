export const HELP = (ref) => {
    let animations = [];

    // Step 1: Position Left Hand (Near Stomach, Palm Up)
    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);

    // Step 2: Position Right Hand (Thumbs-Up Above Left Hand)
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/3.5, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/9, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", -Math.PI/72, "-"]);

    ref.animations.push(animations);
    animations = [];

    // Step 3: Gentle Up-Down Motion for "HELP"
    animations.push(["mixamorigRightHand", "position", "y", 0.6, "+"]); // Raise right hand slightly
    animations.push(["mixamorigRightForeArm", "position", "y", 0.6, "+"]);
    animations.push(["mixamorigRightArm", "position", "y", 0.5, "+"]);
    ref.animations.push(animations);
    animations = [];

    animations.push(["mixamorigRightHand", "position", "y", -0.6, "-"]); // Lower back to position
    animations.push(["mixamorigRightForeArm", "position", "y", -0.6, "-"]);
    animations.push(["mixamorigRightArm", "position", "y", -0.5, "-"]);
    ref.animations.push(animations);
    animations = [];

    animations.push(["mixamorigRightHand", "position", "y", 0.6, "+"]); // Raise right hand slightly
    animations.push(["mixamorigRightForeArm", "position", "y", 0.6, "+"]);
    animations.push(["mixamorigRightArm", "position", "y", 0.5, "+"]);
    ref.animations.push(animations);
    animations = [];

    animations.push(["mixamorigRightHand", "position", "y", -0.6, "-"]); // Lower back to position
    animations.push(["mixamorigRightForeArm", "position", "y", -0.6, "-"]);
    animations.push(["mixamorigRightArm", "position", "y", -0.5, "-"]);
    ref.animations.push(animations);
    animations = [];

    // Step 4: Return to Neutral Position
    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -2.0943951023931953, "+"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);

    animations.push(["mixamorigRightShoulder", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};
