import { gradient, scale } from '../../utils/dimData';
import { moonData1, moonData2 } from './imageData';

export const Moon = props => {
  const { height, switchRadius } = props.settings;
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
                ${gradient(
                  switchRadius * height,
                  switchRadius * height,
                  moonData1,
                  'rgb(155, 155, 155)'
                )}, 
                ${gradient(
                  switchRadius * height,
                  switchRadius * height,
                  moonData2,
                  'rgb(130, 130, 130)'
                )}, 
                radial-gradient( circle at
                  ${scale(switchRadius * 0.2, height)} 
                  ${scale(switchRadius * 0.2, height)}, 
                  rgb(200,200,200) 100%, transparent 100%)`,
        boxShadow: `
                ${scale(-switchRadius * 0.02, height)} 
                  ${scale(-switchRadius * 0.03, height)} 
                  ${scale(switchRadius * 0.03, height)} 
                  rgb(150, 150, 150) inset,
                ${scale(switchRadius * 0.02, height)} 
                ${scale(switchRadius * 0.03, height)} 
                  ${scale(switchRadius * 0.03, height)} 
                  rgb(250, 250, 250) inset`,
      }}
    />
  );
};
