import { SwitchHandler } from '../SwitchHandler';
import { SwitchBasic } from '../SwitchBasic';
import { design } from './design';

export const SwitchCustom = ({
  height,
  width,
  switchRadius,
  value,
  maxValue,
  duration,
  draggable,
  boxStyle,
  BoxChildren,
  SwitchChildren,
  onClick,
}) => {
  const properties = {
    height,
    width,
    switchRadius,
    value,
    maxValue,
    duration,
    draggable,
    design: design,
    boxStyle,
    BoxChildren,
    SwitchChildren,
    onClick,
  };

  return <SwitchHandler Component={SwitchBasic} settings={properties} />;
};
