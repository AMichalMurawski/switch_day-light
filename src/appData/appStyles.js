import { transition } from '../components/utils/dimData';

export const mainBoxStyle = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: value === 0 ? 'lightgray' : 'rgb(50, 50, 50)',
    gap: `30px`,
    transition: transition(duration, 'background-color'),
  };
  return desktop;
};

export const h2Style = ({ device, value, duration }) => {
  const desktop = {
    fontSize: '40px',
    color: value === 0 ? 'black' : 'white',
    transition: transition(duration, 'color'),
  };
  return desktop;
};

export const h3Style = ({ device, value, duration }) => {
  const desktop = {
    textAlign: 'center',
    fontSize: '24px',
    color: value === 0 ? 'black' : 'white',
    transition: transition(duration, 'color'),
  };
  return desktop;
};

export const optionsStyle = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    color: value === 0 ? 'black' : 'white',
    backgroundColor: value === 0 ? 'rgb(230, 230, 230)' : 'rgb(0, 0, 0)',
    transition: transition(duration, ['background-color', 'color']),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  };
  return desktop;
};

export const tableStyle = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    border: value === 0 ? '2px solid black' : '2px solid white',
    transition: transition(duration, 'border'),
  };
  return desktop;
};

export const tableRowStyle = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    border: value === 0 ? '2px solid black' : '2px solid white',
    transition: transition(duration, 'border'),
  };
  return desktop;
};

export const tableCellStyle = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    border: value === 0 ? '2px solid black' : '2px solid white',
    padding: '10px 20px',
    transition: transition(duration, 'border'),
  };
  return desktop;
};
