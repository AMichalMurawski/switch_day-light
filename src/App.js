import { useState } from 'react';
import './App.css';
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
import { SwitchHandler } from './components/SwitchHandler';
import { SwitchDayNight } from './components/SwitchDayNight';

function App() {
  const [switches, setSwitches] = useState({
    value: 0,
    scale: 4,
    duration: 500,
    device: 'desktop',
  });

  const handleClick = value => {
    setSwitches(previous => ({ ...previous, value }));
  };

  return (
    <div style={mainBoxStyle(switches)}>
      <h2 style={h2Style(switches)}>Your app switch</h2>
      <SwitchHandler
        Component={SwitchDayNight}
        value={switches.value}
        maxValue={3}
        width={369}
        height={145}
        moveType="step"
        transitionDuration={500}
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
