import './App.css';
import { useState } from "react";

function App() {
  // State variables
  const [energy, setEnergy] = useState(100);
  const [bugs, setBugs] = useState(0);
  const [happiness, setHappiness] = useState(100);
  const [codeWritten, setCodeWritten] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const CODE_GOAL = 1000;

  // Actions
  function writeCode() {
    setEnergy(prev => Math.max(prev - Math.floor(Math.random() * 11), 0));
    setBugs(prev => prev + Math.floor(Math.random() * 2));
    setHappiness(prev => Math.min(Math.max(prev + Math.floor(Math.random() * 11) - 7, 0), 100));
    setCodeWritten(prev => prev + Math.floor(Math.random() * 29) + 1);
    setClickCount(prev => prev + 1);
  }

  function fixBug() {
    if (bugs > 0) {
      setBugs(prev => prev - 1);
      setEnergy(prev => Math.max(prev - Math.floor(Math.random() * 6), 0));
      setHappiness(prev => Math.min(Math.max(prev + Math.floor(Math.random() * 11) - 7, 0), 100));
      setClickCount(prev => prev + 1);
    }
  }

  function takeBreak() {
    setHappiness(prev => Math.min(prev + 10, 100));
    setEnergy(prev => Math.min(prev + 1, 100));
    setClickCount(prev => prev + 1);
  }

  function drinkCoffee() {
    setEnergy(prev => Math.min(prev + 10, 100));
    setHappiness(prev => Math.min(prev + 1, 100));
    setClickCount(prev => prev + 1);
  }

  return (
      <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
        <h1>Developer Simulator</h1>

        <div style={{ marginBottom: "2rem" }}>
          <p>⚡ Energy: {energy}%</p>
          <p>🐛 Bugs: {bugs}</p>
          <p>😀 Happiness: {happiness}%</p>
          <p>📝 Code Written: {codeWritten} lines</p>
          <p>🕰️ Time: {clickCount}</p>
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={writeCode}>💻 Write Code</button>
          <button onClick={fixBug}>🛠️ Fix Bug</button>
          <button onClick={takeBreak}>☀️ Take Break</button>
          <button onClick={drinkCoffee}>☕ Drink Coffee</button>
        </div>

        {(energy <= 0 || happiness <= 0 || bugs >= 20 || codeWritten >= CODE_GOAL) && (
            <div style={{ marginTop: "2rem", color: "red" }}>
              <h2>Game Over! You burned out! 🔥</h2>
            </div>
        )}

        {/* Add a progress bar */}
        <div style={{ marginTop: "2rem" }}>
          <h3>Progress to Developer Fame! 🚀</h3>
          <div style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
            height: "30px",
            width: "80%",
            margin: "0 auto"
          }}>
            <div style={{
              backgroundColor: "#4caf50",
              height: "100%",
              width: `${Math.min((codeWritten / CODE_GOAL) * 100, 100)}%`,
              transition: "width 0.3s"
            }}></div>
          </div>
          <p>{codeWritten} / {CODE_GOAL} lines written</p>
        </div>
      </div>
  );
}

export default App;