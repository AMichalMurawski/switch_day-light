import { useState } from 'react';
import { pxScale3 } from './data/dimData';

export const SwitchHandler = ({
  Component,
  value,
  maxValue = 1,
  width,
  height,
  transitionDuration,
  onClick,
  ...rest
}) => {
  const valPer = value => Math.round(value) / maxValue;

  const [switching, setSwitching] = useState({
    value,
    movePos: Number(pxScale3(valPer(value), width - height, '')),
    xPos: 0,
    move: valPer(value),
    moveDuration: transitionDuration,
    isMoving: false,
  });

  const handleClick = e => {
    console.log(
      'click-switchPos',
      (e.clientX - e.currentTarget.offsetLeft - height / 2) / (width - height)
    );
    let next = {};
    if (switching.value === 0) {
      value = maxValue;
      next = {
        value,
        movePos: Number(pxScale3(1, width - height, '')),
        move: 1,
        moveDuration: transitionDuration,
      };
    } else {
      value = 0;
      next = {
        value,
        movePos: 0,
        move: 0,
        moveDuration: transitionDuration,
      };
    }
    setSwitching(prev => ({ ...prev, ...next }));
    onClick(value);
  };

  const handleDragStart = (e, screen) => {
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    setSwitching(prev => ({ ...prev, xPos, isMoving: true }));
  };

  const handleDrag = (e, screen) => {
    let xPos = null;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    if (xPos === 0) return;
    let move =
      (switching.movePos + (xPos - switching.xPos)) /
      Number(pxScale3(1, width - height, ''));
    if (move < 0) move = 0;
    if (move > 1) move = 1;
    setSwitching(prev => ({
      ...prev,
      move: move,
    }));
  };

  const handleDragEnd = (e, screen) => {
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    let checkMove =
      (switching.movePos + (xPos - switching.xPos)) /
      Number(pxScale3(1, width - height, ''));
    if (checkMove < 0) checkMove = 0;
    if (checkMove > 1) checkMove = 1;
    const checkValue = checkMove * maxValue;
    value = Math.round(checkValue);
    const move = valPer(value);
    const duration =
      value > checkValue
        ? Math.abs(value - checkValue)
        : Math.abs(checkValue - value);
    const next = {
      value,
      movePos: Number(pxScale3(valPer(value), width - height, '')),
      move,
      moveDuration: duration * transitionDuration,
    };
    setSwitching(prev => ({ ...prev, ...next, isMoving: false }));
    console.log('drag onClick', value);
    onClick(value);
  };

  const handleMove = move => {
    value = Math.round(move * maxValue);
    setSwitching(prev => ({ ...prev, value, move }));
    console.log('move onClick', value);
    onClick(value);
  };

  const properties = {
    ...rest,
    width,
    height,
    move: switching.move,
    isMoving: switching.isMoving,
    moveDuration: switching.moveDuration,
    handleClick,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleMove,
  };

  console.log(properties.move);

  return <Component props={properties} />;
};
