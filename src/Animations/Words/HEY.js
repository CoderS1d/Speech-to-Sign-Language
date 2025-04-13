export const HEY = (ref) => {
    let animations = [];

    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI / 4, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI / 6, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 6, "-"]);
    
    ref.animations.push(animations);
    
    animations = [];

    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    
    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};