import { useState } from 'react';
import './App.css';
import { SwitchDayNight } from './components/switches';
import { SwitchYesNo } from './components/switches/SwitchYesNo';
import { SwitchCustom } from './components/switches/SwitchCustom';
import { SwitchChildren, boxStyle } from './appData/customDesign';
import { Header } from './components/website/Header';
import { Page } from './components/website/Page';
import { Main } from './components/website/Main';
import { SwitchBoard, SwitchBox } from './components/website/Switch';
import { PropertiesTable } from './components/website/PropertiesTable';

const initialSwitchProperties = {
  height: 30,
  width: 75,
  switchRadius: 0.6,
  value: 0,
  maxValue: 1,
  duration: 300,
  draggable: false,
  onClick: () => {},
  switchColors: null,
  backgroundColors: null,
  IconYes: null,
  IconNo: null,
  boxStyle: null,
  BoxChildren: null,
  SwitchChildren: null,
  // moveType: 'revalue',
};

function App() {
  const [switches, setSwitches] = useState(initialSwitchProperties);
  const [device, setDevice] = useState('desktop');
  const [darkMode, setDarkMode] = useState(0);

  const handleClick = value => {
    setDarkMode(value);
  };

  return (
    <Page className="full-size">
      <Header className="full-size">
        <div className="wrapper full-size">
          <h1>M.A.D.M. Switch</h1>
        </div>
      </Header>
      <Main className="full-size">
        <div className="wrapper full-size">
          <h2>Try app switch</h2>
          <SwitchBox>
            <form className="switch-selector" name="selectSwitch">
              <label className="selector-label" for="selectSW">
                Select switch:
              </label>
              <select className="selector-select" id="selectSW" name="selectSW">
                <option value="day-night" selected>
                  Dark mode switch
                </option>
                <option value="yes-no">Boolean switch</option>
                <option value="custom">Custom switch</option>
              </select>
            </form>
            <SwitchBoard>
              <SwitchDayNight
                height={switches.height}
                width={switches.width}
                value={switches.value}
                duration={switches.duration}
                draggable={switches.draggable}
                onClick={handleClick}
              />
              <SwitchYesNo
                height={switches.height}
                width={switches.width}
                switchRadius={switches.switchRadius}
                value={switches.value}
                duration={switches.duration}
                draggable={switches.draggable}
                switchColors={switches.switchColors}
                backgroundColors={switches.backgroundColors}
                IconYes={switches.IconYes}
                IconNo={switches.IconNo}
                onClick={switches.onClick}
              />
              <SwitchCustom
                height={switches.height}
                width={switches.width}
                switchRadius={switches.switchRadius}
                value={switches.value}
                maxValue={switches.maxValue}
                duration={switches.duration}
                draggable={switches.draggable}
                boxStyle={switches.boxStyle}
                BoxChildren={switches.BoxChildren}
                SwitchChildren={switches.SwitchChildren}
                onClick={switches.onClick}
              />
            </SwitchBoard>
          </SwitchBox>

          <PropertiesTable className="full-size">
            <h3 className="text-center">Properties</h3>
            <table>
              <thead>
                <tr>
                  <th>Properties</th>
                  <th>Value</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </PropertiesTable>
        </div>
      </Main>
    </Page>
  );
}

export default App;
