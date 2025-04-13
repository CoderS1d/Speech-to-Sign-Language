
export const HOW = (ref) => {
    let animations = [];
    const repeatCount = 2; // How many times to repeat the to-and-fro motion
    const armSwingAmount = Math.PI/12; // Control how much the arm swings forward/back

    // Initial finger positions (same as your original)
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "x", Math.PI/3, "+"]);

    // Hand rotation (same as your original)
    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    // Create the to-and-fro motion
    for (let i = 0; i < repeatCount; i++) {
        // Swing arm forward
        animations.push(["mixamorigRightForeArm", "rotation", "x", armSwingAmount, "+"]);
        //animations.push(["mixamorigRightArm", "rotation", "x", -armSwingAmount/2, "-"]);
        
        ref.animations.push(animations);
        animations = [];
        
        // Swing arm backward
        animations.push(["mixamorigRightForeArm", "rotation", "x", -armSwingAmount, "-"]);
        //animations.push(["mixamorigRightArm", "rotation", "x", armSwingAmount/2, "+"]);
        
        ref.animations.push(animations);

        animations = [];
        
    }
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    // Return to neutral position
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "x", 0, "-"]);
    
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}