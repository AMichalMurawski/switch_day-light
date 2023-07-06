import { useState } from 'react';
import './App.css';
import { SwitchDayNight1 } from './components/SwitchDayNight1';
import { SwitchDayNight3 } from './components/SwitchDayNight3';
// import { SwitchDayNight2 } from './components/SwitchDayNight2';
import {
  mainBoxStyle,
  h2Style,
  h3Style,
  optionsStyle,
  tableStyle,
  tableRowStyle,
  tableCellStyle,
} from './appData/appStyles';

function App() {
  const [switches, setSwitches] = useState({
    mode: 'light',
    scale: 4,
    duration: 500,
    device: 'desktop',
  });

  const handleClick = mode => {
    setSwitches(previous => ({ ...previous, mode }));
  };

  return (
    <div style={mainBoxStyle(switches)}>
      <h2 style={h2Style(switches)}>Your app switch</h2>
      <SwitchDayNight1
        scale={1}
        mode={switches.mode}
        onClick={handleClick}
        height={145}
        width={290}
      />
      <SwitchDayNight3
        scale={switches.scale}
        mode={switches.mode}
        onClick={handleClick}
      />
      <div style={optionsStyle(switches)}>
        <div>
          <h3 style={h3Style(switches)}>Global options</h3>
          <table style={tableStyle(switches)}>
            <thead>
              <tr style={tableRowStyle(switches)}>
                <th style={tableCellStyle(switches)}>Properties</th>
                <th style={tableCellStyle(switches)}>Value</th>
                <th style={tableCellStyle(switches)}>Default</th>
                <th style={tableCellStyle(switches)}>Description</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div>
          <h3 style={h3Style(switches)}>Switch type options</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
