import { useEffect } from 'react';
import { SwitchBasic } from '../SwitchBasic';
import { SwitchHandler } from '../SwitchHandler';
import { settingsCheck } from '../utils/settingsCheck';
import { design } from './design';

export const SwitchDarkMode = ({
  height,
  width,
  value,
  duration,
  draggable,
  onClick,
}) => {
  useEffect(() => {
    settingsCheck({ width });
  }, [width]);

  const settings = {
    width:
      width < 2 * height ? 2 * height : width > 4 * height ? 4 * height : width,
    height: height,
    switchRadius: 0.8,
    value,
    maxValue: 1,
    duration,
    draggable,
    onClick,
    design: design,
  };

  return <SwitchHandler Component={SwitchBasic} settings={settings} />;
};
