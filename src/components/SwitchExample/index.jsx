import { useEffect } from 'react';
import { propsCheck } from '../utils/propsCheck';
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
  useEffect(() => {
    propsCheck({ height, width, value, maxValue, duration });
  }, [height, width, value, maxValue, duration]);

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
