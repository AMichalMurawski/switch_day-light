import { useState } from 'react';
import './App.css';
import { Page } from './components/website/PageStyle';
import { PropertiesTable } from './components/website/PropertiesTableStyle';
import { Header, Main, SwitchBox, SwitchSelector } from './components/website';
import { SwitchBoard } from './components/website/SwitchBoard';

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
  const [darkMode, setDarkMode] = useState(switches.value);
  const [switchType, setSwitchType] = useState('dark-mode');

  const handleSwitchChange = value => {
    console.log('app', value);
    setSwitchType(value);
  };

  const darkModeClick = value => {
    setDarkMode(value);
    setSwitches(prev => ({ ...prev, value }));
  };

  const booleanClick = () => {};

  const customClick = () => {};

  return (
    <Page className="full-size">
      <Header />
      <Main>
        <h2>Try app switch</h2>
        <SwitchBox>
          <SwitchSelector
            switchType={switchType}
            onChange={handleSwitchChange}
          />
          <SwitchBoard
            switches={switches}
            switchType={switchType}
            darkModeClick={darkModeClick}
            booleanClick={booleanClick}
            customClick={customClick}
          />
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
      </Main>
    </Page>
  );
}

export default App;
