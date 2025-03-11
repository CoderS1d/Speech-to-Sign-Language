// THANK_YOU.js
export const THANK_YOU = (ref) => {
    let animations = [];

    // Step 1: Raise the arm towards the chin (use shoulder/elbow)
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 6, "-"]); // Lift arm
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI / 8, "-"]); // Bend elbow slightly
    animations.push(["mixamorigRightHand", "position", "z", -0.05, "-"]); // Move slightly closer to the chin

    ref.animations.push(animations);

    animations = [];

    // Step 2: Perform the "thank you" motion (move forward)
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 12, "+"]); // Straighten elbow slightly
    animations.push(["mixamorigRightHand", "position", "z", 0.12, "+"]); // Move forward
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]); // Reset slight tilt

    ref.animations.push(animations);

    animations = [];

    // Step 3: Return to neutral position
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]); // Lower arm
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]); // Reset elbow
    animations.push(["mixamorigRightHand", "position", "z", -0.1, "-"]); // Move hand back

    ref.animations.push(animations);

    if (!ref.pending) {
        ref.pending = true;
        ref.animate();
    }
};
