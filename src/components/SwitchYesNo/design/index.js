import { IconCheckMark } from './IconCheckMark';
import { IconCross } from './IconCross';
import { SwitchBox } from './SwitchBox';

export const design = settings => {
  const { backgroundColors, move, iconYes, iconNo } = settings;

  return {
    boxStyle: {
      backgroundColor: `rgb(
          ${
            backgroundColors[0][1] +
            move * (backgroundColors[1][1] - backgroundColors[0][1])
          }, 
          ${
            backgroundColors[0][2] +
            move * (backgroundColors[1][2] - backgroundColors[0][2])
          }, 
          ${
            backgroundColors[0][3] +
            move * (backgroundColors[1][3] - backgroundColors[0][3])
          })`,
    },
    boxChildren: () => (
      <>
        <IconCheckMark settings={settings} />
        <IconCross settings={settings} />
      </>
    ),
    switchChildren: () => (
      <>
        <SwitchBox settings={settings} />
      </>
    ),
  };
};
