import { scale } from '../../utils/dimData';
import { Moon } from './Moon';
import { Sun } from './Sun';

export const SunMoonBox = ({ props }) => {
  const { height } = props;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: scale(0.8, height),
        height: scale(0.8, height),
        borderRadius: scale(0.4, height),
        boxShadow: `${scale(1 / 45, height)} ${scale(1 / 45, height)} 
                ${scale(1 / 30, height)} rgb(30, 30, 30)`,
        overflow: 'hidden',
        zIndex: 11,
      }}
    >
      <Moon props={props} />
      <Sun props={props} />
    </div>
  );
};
