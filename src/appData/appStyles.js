import { transition } from '../components/utils/dimData';

export const page = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    minWith: '100vw',
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    padding: '0',
    margin: '0 auto',
    backgroundColor: value === 0 ? 'lightgray' : 'rgb(50, 50, 50)',
    transition: transition(duration, 'background-color'),
  };
  return desktop;
};

export const headerBox = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    padding: '0',
    margin: '0 auto',
    backgroundColor: 'gray',
  };
  return desktop;
};

export const headerWrapper = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 15px',
    margin: '0 auto',
  };
  return desktop;
};

export const mainBoxStyle = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    margin: '0 auto',
  };
  return desktop;
};

export const mainWrapper = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '340px',
    maxWidth: '1200px',
    height: '100%',
    margin: '0 auto',
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    gap: `30px`,
    alignItems: 'center',
  };
  return desktop;
};

export const switchBox = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `30px`,
  };
  return desktop;
};

export const h1Style = ({ device, value, duration }) => {
  const desktop = {
    fontSize: '60px',
    color: 'black',
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

export const selectSwitch = ({ device, value, duration }) => {
  const desktop = {
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 0 60px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'flex-end',
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
