import { gradient, scale } from '../../utils/dimData';
import { moonData1, moonData2 } from './imageData';

export const Moon = ({ props }) => {
  const { height } = props;
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: `
                ${gradient(height, height, moonData1, 'rgb(155, 155, 155)')}, 
                ${gradient(height, height, moonData2, 'rgb(130, 130, 130)')}, 
                radial-gradient( circle at
                  ${scale(1 / 5, height)} ${scale(1 / 5, height)}, 
                  rgb(200,200,200) 100%, transparent 100%)`,
        boxShadow: `
                ${scale(-1 / 50, height)} ${scale(-1 / 35, height)} 
                  ${scale(1 / 35, height)} rgb(150, 150, 150) inset,
                ${scale(1 / 50, height)} ${scale(1 / 35, height)} 
                  ${scale(1 / 35, height)} rgb(250, 250, 250) inset`,
      }}
    />
  );
};
