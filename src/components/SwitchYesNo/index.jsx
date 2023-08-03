import { useEffect, useState } from 'react';
import { propsCheck } from '../utils/propsCheck';
import { SwitchHandler } from '../SwitchHandler';
import { SwitchBasic } from '../SwitchBasic';
import { design } from './design';

const checkColors = (colors, defaultColors) => {
  if (!colors) {
    return defaultColors;
  }

  let isColorStart = false;
  let isColorEnd = false;

  if (colors.length !== 2) {
    throw new Error(
      'in colors property Array must be two Arrays with first value 0 and second value 1'
    );
  }

  const colors2 = colors
    .map(val => {
      if (!Array.isArray(val)) {
        throw new Error(
          'the structure of the color property must be as follows:' +
            '\n' +
            '[[value: number, redColor: number, greenColor: number, blueColor: number], ... ]' +
            '\n' +
            'or for using boxShadow:' +
            '\n' +
            '[[value: number, redColor: number, greenColor: number, blueColor : number, redColorBoxShadow: number, greenColorBoxShadow: number, blueColorBoxShadow: number], ... ]'
        );
      }
      return val.map(num => {
        if (isNaN(num)) {
          throw new Error('values in colors must be numbers types');
        }
        if (Number(num) === 0) isColorStart = true;
        if (Number(num) === 1) isColorEnd = true;
        return Number(num);
      });
    })
    .sort((a, b) => a[0] - b[0]);

  if (isColorStart === false || isColorEnd === false) {
    throw new Error(
      'in colors property Array must be two Arrays with first value 0 and second value 1'
    );
  }

  return colors2;
};

export const SwitchYesNo = ({
  height,
  width,
  switchRadius,
  value,
  duration,
  draggable,
  switchColors,
  backgroundColors,
  iconYes,
  iconNo,
  onClick,
}) => {
  const [newSwitchColors, setNewSwitchColors] = useState([
    [0, 0, 200, 0],
    [1, 200, 0, 0],
  ]);
  const [newBackgroundColors, setNewBackgroundColors] = useState([
    [0, 0, 250, 0],
    [1, 250, 0, 0],
  ]);

  useEffect(() => {
    propsCheck({ height, width, value, maxValue: 1, duration });
  }, [height, width, value, duration]);

  width = width < 2 * height ? 2 * height : width;

  useEffect(() => {
    const colors = checkColors(switchColors, [
      [0, 0, 255, 0],
      [1, 255, 0, 0],
    ]);
    setNewSwitchColors(colors);
  }, [switchColors]);

  useEffect(() => {
    const colors = checkColors(backgroundColors, [
      [0, 100, 250, 100],
      [1, 250, 100, 100],
    ]);
    setNewBackgroundColors(colors);
  }, [backgroundColors]);

  const properties = {
    width,
    height,
    switchRadius,
    value,
    maxValue: 1,
    duration,
    draggable,
    design: design,
    switchColors: newSwitchColors,
    backgroundColors: newBackgroundColors,
    iconYes,
    iconNo,
    onClick,
  };

  return <SwitchHandler Component={SwitchBasic} props={properties} />;
};
