import { SwitchCustom } from '../../switches';
import { Board } from './BoardSwitchCustom/BoardStyle';

export const BoardSwitchCustom = ({ props }) => {
  return (
    <Board>
      <SwitchCustom
        height={props.height}
        width={props.width}
        switchRadius={props.switchRadius}
        value={props.value}
        maxValue={props.maxValue}
        duration={props.duration}
        draggable={props.draggable}
        boxStyle={props.boxStyle}
        BoxChildren={props.BoxChildren}
        SwitchChildren={props.SwitchChildren}
        onClick={props.onClick}
      />
    </Board>
  );
};
