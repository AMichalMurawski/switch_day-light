import { SwitchBoolean } from '../../../switches';
import { Board } from './BoardStyle';

export const BoardSwitchBoolean = ({ props }) => {
  return (
    <Board>
      <SwitchBoolean
        height={props.height}
        width={props.width}
        switchRadius={props.switchRadius}
        value={props.value}
        duration={props.duration}
        draggable={props.draggable}
        switchColors={props.switchColors}
        backgroundColors={props.backgroundColors}
        IconYes={props.IconYes}
        IconNo={props.IconNo}
        onClick={props.onClick}
      />
    </Board>
  );
};
