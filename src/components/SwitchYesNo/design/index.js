import { BoxNo } from './BoxNo';
import { BoxYes } from './BoxYes';
import { IconCheckMark } from './IconCheckMark';
import { IconCross } from './IconCross';
import { SwitchBox } from './SwitchBox';

export const design = settings => {
  const { backgroundColors, move, IconYes, IconNo } = settings;
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
        <BoxYes settings={settings}>
          {!IconYes ? (
            <IconCheckMark settings={settings} />
          ) : IconYes.type === IconCheckMark.type ? (
            <IconYes />
          ) : (
            IconYes
          )}
        </BoxYes>
        <BoxNo settings={settings}>
          {!IconNo ? (
            <IconCross settings={settings} />
          ) : IconNo.type === IconCross.type ? (
            <IconNo />
          ) : (
            IconNo
          )}
        </BoxNo>
      </>
    ),
    switchChildren: () => (
      <>
        <SwitchBox settings={settings} />
      </>
    ),
  };
};
