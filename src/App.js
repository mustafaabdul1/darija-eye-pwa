import React, { useEffect, useState } from 'react';
import webgazer from 'webgazer';

const App = () => {
  const [gazeData, setGazeData] = useState({ x: 0, y: 0 });

  useEffect(() => {
    webgazer.setGazeListener((data) => {
      if (data) {
        setGazeData({ x: data.x, y: data.y });
      }
    }).begin();
  }, []);

  return (
    <div>
      <h1>Darija Eye Tracking PWA</h1>
      <p>Gaze Position: X: {gazeData.x.toFixed(2)}, Y: {gazeData.y.toFixed(2)}</p>
    </div>
  );
};

export default App;