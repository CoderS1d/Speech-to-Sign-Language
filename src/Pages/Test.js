import React, { useEffect, useRef, useState } from 'react';

function FaceDetection() {
  const videoRef = useRef(null);
  const inputCanvasRef = useRef(null);
  const outputCanvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setIsRunning(true);
    } catch (err) {
      console.error("Error accessing the camera:", err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsRunning(false);
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (videoRef.current && inputCanvasRef.current && outputCanvasRef.current) {
          // Draw the current video frame to the input canvas
          const inputCtx = inputCanvasRef.current.getContext('2d');
          inputCtx.drawImage(
            videoRef.current, 
            0, 
            0, 
            inputCanvasRef.current.width, 
            inputCanvasRef.current.height
          );

          // Get the image data as base64
          const imageData = inputCanvasRef.current.toDataURL('image/jpeg');

          // Send this image data to the Flask backend for face detection
          fetch("http://localhost:5000/api/test", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ image: imageData.split(',')[1] })
          })
          .then(response => response.json())
          .then(data => {
            // Draw the processed image to the output canvas
            const outputCtx = outputCanvasRef.current.getContext('2d');
            const img = new Image();
            img.onload = () => {
              outputCtx.drawImage(
                img,
                0,
                0,
                outputCanvasRef.current.width,
                outputCanvasRef.current.height
              );
            };
            img.src = `data:image/jpeg;base64,${data.image}`;
          })
          .catch(error => console.error('Error:', error));
        }
      }, 1000); // Send every second
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Face Detection</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '20px',
        gap: '10px'
      }}>
        <button 
          onClick={startCamera} 
          disabled={isRunning}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Start Camera
        </button>
        <button 
          onClick={stopCamera} 
          disabled={!isRunning}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Stop Camera
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Camera Feed</h3>
          <canvas 
            ref={inputCanvasRef} 
            width="500" 
            height="400" 
            style={{ 
              border: '1px solid #ddd',
              display: isRunning ? 'block' : 'none'
            }}
          ></canvas>
          {!isRunning && (
            <div style={{
              width: '500px',
              height: '400px',
              border: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5'
            }}>
              Camera is off
            </div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Processed Output</h3>
          <canvas 
            ref={outputCanvasRef} 
            width="500" 
            height="400" 
            style={{ 
              border: '1px solid #ddd',
              display: isRunning ? 'block' : 'none'
            }}
          ></canvas>
          {!isRunning && (
            <div style={{
              width: '500px',
              height: '400px',
              border: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5'
            }}>
              No output available
            </div>
          )}
        </div>
      </div>

      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        style={{ display: 'none' }}
      ></video>
    </div>
  );
}

export default FaceDetection;