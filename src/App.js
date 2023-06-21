import { useState } from 'react';
import './App.css';
import { SwitchDayNight1 } from './components/SwitchDayNight1';
import { SwitchDayNight2 } from './components/SwitchDayNight2';

function App() {
  const [switches, setSwitches] = useState({
    switch1: 'light',
    switch2: 'dark',
  });

  const handleClick1 = mode => {
    setSwitches(previous => ({ ...previous, switch1: mode }));
  };

  const handleClick2 = mode => {
    setSwitches(previous => ({ ...previous, switch2: mode }));
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        gap: '100px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <SwitchDayNight1
          scale="4"
          mode={switches.switch1}
          onClick={handleClick1}
        />
        <p style={{ fontSize: '30px' }}>Switch 1 - {switches.switch1} mode</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <SwitchDayNight2
          scale="4"
          mode={switches.switch2}
          onClick={handleClick2}
        />
        <p style={{ fontSize: '30px' }}>Switch 2 - {switches.switch2} mode</p>
      </div>
    </div>
  );
}

export default App;
