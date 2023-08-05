import { transition } from '../components/utils/dimData';

export const boxStyle = settings => ({
  backgroundColor: `rgb(${255 - settings.move * 255}, 
    ${255 - settings.move * 255}, ${255 - settings.move * 255})`,
  transition: transition(settings.moveDuration, 'background-color'),
});

export const SwitchChildren = props => {
  const { move, moveDuration, switchRadius } = props.settings;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) rotate(45deg) scale(${
          1 - move * 0.3
        })`,
        width: `${switchRadius * 100}%`,
        height: `${switchRadius * 100}%`,
        backgroundColor: `rgba(0, 100, 200, ${0.3 + move * 0.7})`,
        transition: `transform ${moveDuration}ms ease-out, background-color ${moveDuration}ms ease-out`,
      }}
    ></div>
  );
};
