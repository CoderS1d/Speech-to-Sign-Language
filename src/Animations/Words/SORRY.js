export const SORRY = (ref) => {
    let animations = [];

    // Step 1: Move hand to the chest
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/8, "+"]);
    
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/40, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/15, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/15, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/40, "+"]);

    ref.animations.push(animations);
    animations = [];

    // Step 2: Wrist Motion (Left-to-Right)
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]); // Move wrist right
    ref.animations.push(animations);
    animations = [];

    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI / 9, "-"]); // Move wrist left
    ref.animations.push(animations);
    animations = [];

    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]); // Move wrist right again
    ref.animations.push(animations);
    animations = [];
    
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]); // Move wrist left
    ref.animations.push(animations);
    animations = [];

    // Step 3: Return to neutral position
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};
