export const defaultPose = (ref) => {
    ref.characters.push(' ');
    let animations = [];

    // **Slight forward lean for an aggressive stance**
    animations.push(["mixamorigSpine", "rotation", "x", Math.PI / 24, "+"]);
    animations.push(["mixamorigNeck", "rotation", "x", Math.PI / 16, "+"]); // Head slightly forward

    // **Left arm in guard position**
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI / 6, "-"]); // Bring arm inward
    animations.push(["mixamorigLeftArm", "rotation", "y", Math.PI / 8, "+"]); // Move slightly forward
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI / 1.8, "-"]); // Bend elbow 90°

    // **Right arm in guard position**
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 6, "+"]); // Bring arm inward
    animations.push(["mixamorigRightArm", "rotation", "y", -Math.PI / 8, "-"]); // Move slightly forward
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.8, "+"]); // Bend elbow 90°

    // **Hands near face (Boxing Guard Position)**
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI / 8, "-"]); // Slight inward rotation
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 8, "-"]); // Slight inward rotation

    // **Tighten fingers to form a fist**
    const fingers = ["Thumb1", "Thumb2", "Thumb3", "Index1", "Index2", "Index3", 
                     "Middle1", "Middle2", "Middle3", "Ring1", "Ring2", "Ring3", 
                     "Pinky1", "Pinky2", "Pinky3"];

    fingers.forEach(finger => {
        animations.push([`mixamorigLeftHand${finger}`, "rotation", "x", Math.PI / 3, "+"]); // Tighter curl
        animations.push([`mixamorigRightHand${finger}`, "rotation", "x", Math.PI / 3, "+"]); // Tighter curl
    });

    // Apply animations
    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};
