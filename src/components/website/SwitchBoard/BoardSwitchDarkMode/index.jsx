import { SwitchDarkMode } from '../../../switches';
import { Board } from './BoardStyle';

export const BoardSwitchDarkMode = ({ props }) => {
  return (
    <Board $mode={props.value} $duration={props.duration}>
      <SwitchDarkMode
        height={props.height}
        width={props.width}
        value={props.value}
        duration={props.duration}
        draggable={props.draggable}
        onClick={props.onClick}
      />
    </Board>
  );
};
