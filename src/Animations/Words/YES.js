export const YES = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/6, "+"]);;
    
    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/10, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/18, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/11, "-"]);

    

    ref.animations.push(animations);

    animations = [];

    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI / 9, "-"]); // Move wrist left
    ref.animations.push(animations);
    animations = [];

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI / 6, "+"]); // Move wrist Left again
    ref.animations.push(animations);
    animations = [];
    
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]); // Move wrist left
    ref.animations.push(animations);
    

    animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);

    

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}