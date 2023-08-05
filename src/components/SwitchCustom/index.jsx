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
  onClick,
}) => {
  const properties = {
    width,
    height,
    switchRadius,
    value,
    maxValue,
    duration,
    draggable,
    design,
    onClick,
  };

  return <SwitchHandler Component={SwitchBasic} settings={properties} />;
};
