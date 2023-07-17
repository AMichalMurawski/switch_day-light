import { useEffect } from 'react';
import { propsCheck } from '../utils/propsCheck';
import { SwitchHandler } from '../SwitchHandler';
import { SwitchBasic } from '../SwitchBasic';
import { design } from './design';

export const SwitchExample = ({
  height,
  width,
  value,
  maxValue = 1,
  duration,
  colors,
  onClick,
}) => {
  useEffect(() => {
    propsCheck({ height, width, value, maxValue, duration });
  }, [height, width, value, maxValue, duration]);

  const properties = {
    width,
    height,
    value,
    maxValue,
    duration,
    design,
    onClick,
  };

  return <SwitchHandler Component={SwitchBasic} props={properties} />;
};
