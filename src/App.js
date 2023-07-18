import { useState } from 'react';
import './App.css';
import {
  mainBoxStyle,
  h2Style,
  h3Style,
  optionsStyle,
  tableStyle,
  tableRowStyle,
  tableCellStyle,
} from './appData/appStyles';
import { SwitchDayNight } from './components';
import { SwitchExample } from './components/SwitchExample';

function App() {
  const [switches, setSwitches] = useState({
    value: 0,
    maxValue: 1,
    height: 125,
    width: 250,
    duration: 500,
    moveType: 'revalue',
    device: 'desktop',
  });

  const handleClick = value => {
    setSwitches(previous => ({ ...previous, value }));
  };

  return (
    <div style={mainBoxStyle(switches)}>
      <h2 style={h2Style(switches)}>Your app switch</h2>
      <SwitchDayNight
        value={switches.value}
        height={switches.height}
        width={switches.width}
        duration={switches.duration}
        onClick={handleClick}
      />
      <SwitchExample
        value={switches.value}
        height={switches.height}
        width={switches.width}
        duration={switches.duration}
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
