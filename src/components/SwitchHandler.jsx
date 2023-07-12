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

  const [switched, setSwitched] = useState({
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
    if (switched.value === 0) {
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
    setSwitched(prev => ({ ...prev, ...next }));
    onClick(value);
  };

  const handleDragStart = (e, screen) => {
    console.log('start');
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    setSwitched(prev => ({ ...prev, xPos, isMoving: true }));
  };

  const handleDrag = (e, screen) => {
    let xPos = null;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    if (xPos === 0) return;
    let move =
      (switched.movePos + (xPos - switched.xPos)) /
      Number(pxScale3(1, width - height, ''));
    if (move < 0) move = 0;
    if (move > 1) move = 1;
    setSwitched(prev => ({
      ...prev,
      move: move,
    }));
  };

  const handleDragEnd = (e, screen) => {
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    let checkMove =
      (switched.movePos + (xPos - switched.xPos)) /
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
    setSwitched(prev => ({ ...prev, ...next, isMoving: false }));
    console.log('dragEnd');
    onClick(value);
  };

  const handleMove = move => {
    value = Math.round(move * maxValue);
    setSwitched(prev => ({ ...prev, value }));
    console.log('handleMove');
    onClick(value);
  };

  const properties = {
    ...rest,
    width,
    height,
    switched,
    handleClick,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleMove,
  };

  return <Component props={properties} />;
};
