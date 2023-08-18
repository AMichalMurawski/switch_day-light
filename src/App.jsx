import { useState } from 'react';
import { Page } from './components/website/PageStyle';
import { Header, Main, SwitchBox, SwitchSelector } from './components/website';
import { SwitchBoard } from './components/website/SwitchBoard';
import { PropertiesTable } from './components/website/PropertiesTable';

const initialSwitchProperties = {
  height: 30,
  width: 75,
  switchRadius: 0.75,
  value: 0,
  maxValue: 1,
  duration: 500,
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
        <PropertiesTable />
      </Main>
    </Page>
  );
}

export default App;
