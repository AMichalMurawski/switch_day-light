import { SwitchHandler } from '../SwitchHandler';
import { SwitchBasic } from '../SwitchBasic';
import { design } from './design';

export const SwitchExample = ({
  height,
  width,
  switchRadius,
  value,
  maxValue = 1,
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
