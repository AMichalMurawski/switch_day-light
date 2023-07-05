import { transitionFunction } from '../components/data/dimData';

export const mainBoxStyle = ({ device, mode, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100vw',
    height: '100vh',
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: mode === 'light' ? 'lightgray' : 'rgb(50, 50, 50)',
    gap: `30px`,
    transition: transitionFunction(duration, 'background-color'),
  };
  return desktop;
};

export const h2Style = ({ device, mode, duration }) => {
  const desktop = {
    fontSize: '40px',
    color: mode === 'light' ? 'black' : 'white',
    transition: transitionFunction(duration, 'color'),
  };
  return desktop;
};

export const h3Style = ({ device, mode, duration }) => {
  const desktop = {
    textAlign: 'center',
    fontSize: '24px',
    color: mode === 'light' ? 'black' : 'white',
    transition: transitionFunction(duration, 'color'),
  };
  return desktop;
};

export const optionsStyle = ({ device, mode, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    backgroundColor: mode === 'light' ? 'rgb(230, 230, 230)' : 'rgb(0, 0, 0)',
    transition: transitionFunction(duration, 'background-color'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  };
  return desktop;
};

export const tableStyle = ({ device, mode, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    border: '2px solid white',
  };
  return desktop;
};

export const tableRowStyle = ({ device, mode, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    border: '2px solid white',
  };
  return desktop;
};

export const tableCellStyle = ({ device, mode, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    border: '2px solid white',
    padding: '10px 20px',
  };
  return desktop;
};
