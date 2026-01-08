import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const sanitizedInput = display.replace(/[^-+*/0-9.]/g, '');
        const calcResult = eval(sanitizedInput).toString();
        setResult(calcResult);
        setDisplay(calcResult);
      } catch (e) { setDisplay('Error'); }
    } else if (value === 'C') {
      setDisplay(''); setResult('');
    } else {
      if (result !== '') { setDisplay(value); setResult(''); }
      else { setDisplay(display + value); }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <span className="settings-icon">⚙️</span>
        <h1>Luckey7 電卓</h1>
      </div>

      <div className={`calc-card ${result === '7' ? 'lucky-shake' : ''}`}>
        <div className="screen">
          <div className="label">Result</div>
          <div className="value">{result === '7' ? 'Lucky 7!' : display || '0'}</div>
        </div>

        <div className="grid">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((btn) => (
            <button 
              key={btn} 
              className={btn === '=' ? 'btn-blue' : 'btn-normal'}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <p className="footer">結果が 7 になると激しく震えます</p>
    </div>
  );
}

export default App;