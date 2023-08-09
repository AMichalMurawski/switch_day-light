import { useState } from 'react';
import './App.css';
import * as css from './appData/appStyles';
import { SwitchDayNight } from './components';
import { SwitchYesNo } from './components/SwitchYesNo';
import { SwitchCustom } from './components/SwitchCustom';
import { SwitchChildren, boxStyle } from './appData/customDesign';

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
    <div
      style={css.page({
        device: device,
        value: darkMode,
        duration: switches.duration,
      })}
    >
      <header
        style={css.headerBox({
          device: device,
          value: darkMode,
          duration: switches.duration,
        })}
      >
        <div
          style={css.headerWrapper({
            device: device,
            value: darkMode,
            duration: switches.duration,
          })}
        >
          <h2
            style={css.h1Style({
              device: device,
              value: darkMode,
              duration: switches.duration,
            })}
          >
            M.A.D.M. Switch
          </h2>
        </div>
      </header>
      <main
        style={css.mainBoxStyle({
          device: device,
          value: darkMode,
          duration: switches.duration,
        })}
      >
        <div
          style={css.mainWrapper({
            device: device,
            value: darkMode,
            duration: switches.duration,
          })}
        >
          <h2
            style={css.h2Style({
              device: device,
              value: darkMode,
              duration: switches.duration,
            })}
          >
            Try your app switch
          </h2>
          <div style={{ width: '100%' }}>
            <form
              name="selectSwitch"
              style={css.selectSwitch({
                device: device,
                value: darkMode,
                duration: switches.duration,
              })}
            >
              <label for="selectSW">Select switch:</label>
              <select id="selectSW" name="selectSW">
                <option value="day-night" selected>
                  Dark mode switch
                </option>
                <option value="yes-no">Boolean switch</option>
                <option value="custom">Custom switch</option>
              </select>
            </form>
            <div
              style={css.switchBox({
                device: device,
                value: darkMode,
                duration: switches.duration,
              })}
            >
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
            </div>
          </div>

          <div
            style={css.optionsStyle({
              device: device,
              value: darkMode,
              duration: switches.duration,
            })}
          >
            <div>
              <h3
                style={css.h3Style({
                  device: device,
                  value: darkMode,
                  duration: switches.duration,
                })}
              >
                Global options
              </h3>
              <table
                style={css.tableStyle({
                  device: device,
                  value: darkMode,
                  duration: switches.duration,
                })}
              >
                <thead>
                  <tr
                    style={css.tableRowStyle({
                      device: device,
                      value: darkMode,
                      duration: switches.duration,
                    })}
                  >
                    <th
                      style={css.tableCellStyle({
                        device: device,
                        value: darkMode,
                        duration: switches.duration,
                      })}
                    >
                      Properties
                    </th>
                    <th
                      style={css.tableCellStyle({
                        device: device,
                        value: darkMode,
                        duration: switches.duration,
                      })}
                    >
                      Value
                    </th>
                    <th
                      style={css.tableCellStyle({
                        device: device,
                        value: darkMode,
                        duration: switches.duration,
                      })}
                    >
                      Default
                    </th>
                    <th
                      style={css.tableCellStyle({
                        device: device,
                        value: darkMode,
                        duration: switches.duration,
                      })}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <div>
              <h3
                style={css.h3Style({
                  device: device,
                  value: darkMode,
                  duration: switches.duration,
                })}
              >
                Switch type options
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
