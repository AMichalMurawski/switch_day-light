import { useState } from 'react';
import './App.css';
import { SwitchDayNight1 } from './components/SwitchDayNight1';
import { SwitchDayNight2 } from './components/SwitchDayNight2';

function App() {
  const [switches, setSwitches] = useState({
    switch1: 'light',
    switch2: 'dark',
    scale: 3,
  });

  const handleClick1 = mode => {
    setSwitches(previous => ({ ...previous, switch1: mode }));
  };

  const handleClick2 = mode => {
    setSwitches(previous => ({ ...previous, switch2: mode }));
  };

  const switchesMap = ['switch1', 'switch2'];

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
        gap: `${switches.scale * 20}px`,
      }}
    >
      {switchesMap.map((Component, i) => {
        return (
          <div
            key={i}
            style={{
              width: `${switches.scale * 140}px`,
              height: `${switches.scale * 80}px`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: `${switches.scale * 1}px`,
              backgroundColor:
                switches[`switch${i + 1}`] === 'light'
                  ? 'rgb(230, 230, 230)'
                  : 'rgb(100, 100, 100)',
              boxShadow: `${switches.scale * 4}px ${switches.scale * 4}px 
                ${switches.scale * 4}px gray`,
              transition: 'background-color 500ms ease-out',
            }}
          >
            {i === 0 ? (
              <SwitchDayNight1
                scale={switches.scale}
                mode={switches.switch1}
                onClick={handleClick1}
              />
            ) : (
              <SwitchDayNight2
                scale={switches.scale}
                mode={switches.switch2}
                onClick={handleClick2}
              />
            )}

            <p
              style={{
                fontSize: `${switches.scale * 7}px`,
                lineHeight: '1',
              }}
            >
              Switch {i + 1} - {switches[`switch${i + 1}`]} mode
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
