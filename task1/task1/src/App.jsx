import React, { useState } from "react";
import "./App.css";

function ProgressBar({ progress }) {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

function App() {
  const [progress, setProgress] = useState(0);

  const addProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Max 100%
  };

  return (
    <div className="App">
      <button onClick={addProgress}>Add</button>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
