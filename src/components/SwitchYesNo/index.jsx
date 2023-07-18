import { useEffect, useState } from 'react';
import { propsCheck } from '../utils/propsCheck';
import { SwitchHandler } from '../SwitchHandler';
import { SwitchBasic } from '../SwitchBasic';
import { design } from './design';

export const SwitchYesNo = ({
  height,
  width,
  value,
  maxValue = 1,
  duration,
  colors,
  onClick,
}) => {
  const [newColors, setNewColors] = useState([]);

  useEffect(() => {
    propsCheck({ height, width, value, maxValue, duration });
  }, [height, width, value, maxValue, duration]);

  useEffect(() => {
    console.log('1', colors);
    if (!colors) {
      colors = [
        [0, 0, 200, 0],
        [1, 200, 0, 0],
      ];
      return;
    }
    let isColorStart = false;
    let isColorEnd = false;
    console.log('colors', colors);
    const colors2 = colors
      .map(val => {
        if (!Array.isArray(val)) {
          throw new Error(
            'the structure of the color property must be as follows:' +
              '\n' +
              '[[value: number, redColorSwitch: number, greenColorSwitch: number, blueColorSwitch: number], ... ]' +
              '\n' +
              'or for using boxShadow:' +
              '\n' +
              '[[value: number, redColorSwitch: number, greenColorSwitch: number, blueColorSwitch : number, redColorBoxShadow: number, greenColorBoxShadow: number, blueColorBoxShadow: number], ... ]'
          );
        }
        return val.map(num => {
          if (isNaN(num)) {
            throw new Error('value in switch must be number type');
          }
          if (Number(num) === 0) isColorStart = true;
          if (Number(num) === maxValue) isColorEnd = true;
          return Number(num);
        });
      })
      .sort((a, b) => a[0] - b[0]);

    console.log(colors2);
    if (
      isColorStart === false ||
      isColorEnd === false ||
      colors2.length !== 2
    ) {
      throw new Error(
        'in colors Array must be two Arrays with first value 0 and 1'
      );
    }

    for (let i = 0; i < colors2.length; i++) {}
    setNewColors(colors2);
  }, [colors]);

  colors = newColors.length > 0 ? newColors : colors;

  const properties = {
    width,
    height,
    value,
    maxValue,
    duration,
    design: design,
    colors,
    onClick,
  };

  return <SwitchHandler Component={SwitchBasic} props={properties} />;
};
