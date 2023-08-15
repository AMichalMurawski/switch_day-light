import { scale } from '../../utils/dimData';

export const SunMoonBox = props => {
  const { height, switchRadius } = props.settings;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${switchRadius * 100}%`,
        height: `${switchRadius * 100}%`,
        borderRadius: '50%',
        boxShadow: `${scale(switchRadius * 0.02, height)} 
          ${scale(switchRadius * 0.02, height)} 
          ${scale(switchRadius * 0.04, height)} 
          rgb(30, 30, 30)`,
        overflow: 'hidden',
        zIndex: 11,
      }}
    >
      {props.children}
    </div>
  );
};
