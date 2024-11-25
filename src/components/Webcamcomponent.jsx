import { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { io } from 'socket.io-client';

const socket = io('http://127.0.0.1:5000'); // Replace with your Flask backend URL

export const Webcamcomponent = () => {
  const webcamRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    socket.on('prediction', (data) => {
      console.log('Prediction:', data);
      setPrediction(data.label);
    });

    socket.on('error', (data) => {
      console.error('Error from server:', data.error);
    });

    return () => {
      socket.disconnect(); // Disconnect socket on unmount
    };
  }, []);

  const startStreaming = () => {
    if (!webcamRef.current) {
      console.error('Webcam not initialized!');
      return;
    }

    setIsStreaming(true);

    const sendFrames = () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const base64Frame = imageSrc.split(',')[1];
        console.log('Sending frame to backend');
        socket.emit('video_frame', { frame: base64Frame });
      }
    };

    const interval = setInterval(sendFrames, 200); // Send at 5 FPS

    return () => clearInterval(interval);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>ASL Detector</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        style={{ margin: '20px auto', borderRadius: '10px' }}
      />
      <button
        onClick={startStreaming}
        disabled={isStreaming}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: isStreaming ? 'gray' : 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: isStreaming ? 'not-allowed' : 'pointer',
        }}
      >
        {isStreaming ? 'Streaming...' : 'Start Streaming'}
      </button>
      {prediction !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Prediction: {prediction}</h3>
        </div>
      )}
    </div>
  );
};

export default Webcamcomponent;

