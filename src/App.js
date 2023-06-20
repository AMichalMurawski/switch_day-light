import './App.css';
import { SwitchDayNight1 } from './components/SwitchDayNight1';
import { SwitchDayNight2 } from './components/SwitchDayNight2';

function App() {
  const handleClick1 = mode => {
    console.log('mode 1:', mode);
  };

  const handleClick2 = mode => {
    console.log('mode 2:', mode);
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
        gap: '30px',
      }}
    >
      <SwitchDayNight1 scale="4" onClick={handleClick1} />
      <SwitchDayNight2 scale="4" onClick={handleClick2} />
    </div>
  );
}

export default App;
