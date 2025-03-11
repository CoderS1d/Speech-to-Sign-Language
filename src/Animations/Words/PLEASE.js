// PLEASE.js
export const PLEASE = (ref) => {
    let animations = [];

    // Right hand moves in a circular motion on the chest
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI / 6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI / 6, "-"]);
    
    ref.animations.push(animations);

    animations = [];

    // Reset position
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    
    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};
