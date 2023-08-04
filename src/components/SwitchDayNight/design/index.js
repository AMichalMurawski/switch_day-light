import { Stars } from './Stars';
import { Clouds1 } from './Clouds1';
import { Clouds2 } from './Clouds2';
import { SunMoonRays } from './SunMoonRays';
import { SunMoonBox } from './SunMoonBox';
import { scale, transition } from '../../utils/dimData';
import { Moon } from './Moon';
import { Sun } from './Sun';

export const design = settings => {
  const { move, isMoving, height, moveDuration } = settings;
  return {
    boxStyle: {
      backgroundColor: `rgb(${51 - move * 55}, ${103 - move * 103}, ${
        193 - move * 159
      })`,
      boxShadow: `
        0 ${scale(1 / 15, height)} 
            ${scale(1 / 10, height)} rgb(0, 0, 0) inset,
        0 ${scale(1 / 30, height)} 
            ${scale(1 / 50, height)} rgb(250, 250, 250),
        0 ${scale(1 / 35, height)} 
            ${scale(1 / 50, height)} rgb(0, 0, 0)`,
      transition: !isMoving
        ? transition(moveDuration, ['background-color', 'box-shadow'])
        : null,
    },
    boxChildren: () => (
      <>
        <Clouds1 settings={settings} />
        <Clouds2 settings={settings} />
        <Stars settings={settings} />
      </>
    ),
    switchChildren: () => (
      <>
        <SunMoonBox settings={settings}>
          <Moon settings={settings} />
          <Sun settings={settings} />
        </SunMoonBox>
        <SunMoonRays settings={settings} />
      </>
    ),
  };
};
