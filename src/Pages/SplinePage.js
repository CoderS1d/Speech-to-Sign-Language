import React from "react";

const SplinePage = () => {
  return (
    <div style={containerStyle}>
      <iframe
        src='https://my.spline.design/nexbotrobotcharacterconcept-acb2d23b489d12b9b2ac23214d490a6d/'
        allowFullScreen
        style={iframeStyle}
      ></iframe>
    </div>
  );
};


const containerStyle = {
  width: "100vw",
  height: "100vh",
  //overflow: "hidden", // Removes scrollbar
  position: "fixed",  // Ensures no extra space
  top: 0,
  left: 0,
};

const iframeStyle = {
  width: "100vw",
  height: "100vh",
  border: "none",
};

export default SplinePage;
