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
        width: '80%',
        height: '80%',
        borderRadius: '50%',
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
