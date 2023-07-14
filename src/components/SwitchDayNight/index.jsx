import { useEffect } from 'react';
import { SwitchBasic } from '../SwitchBasic';
import { SwitchHandler } from '../SwitchHandler';
import { propsCheck } from '../utils/propsCheck';
import { design } from './design';

export const SwitchDayNight = ({ height, width, value, duration, onClick }) => {
  useEffect(() => {
    propsCheck({ height, width, value, maxValue: 1, duration });
  }, [height, width, value, duration]);

  const properties = {
    width:
      width < 2 * height ? 2 * height : width > 4 * height ? 4 * height : width,
    height: height,
    value,
    maxValue: 1,
    duration,
    onClick,
    design: design,
  };

  return <SwitchHandler Component={SwitchBasic} props={properties} />;
};
