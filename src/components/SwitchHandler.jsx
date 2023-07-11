import { useState } from 'react';
import { modeType, pxScale3 } from './data/dimData';

export const SwitchHandler = ({
  Component,
  mode,
  width,
  height,
  transitionDuration,
  onClick,
  ...rest
}) => {
  const [switched, setSwitched] = useState({
    mode: mode,
    movePos:
      mode === modeType.light ? 0 : Number(pxScale3(1, width - height, '')),
    xPos: 0,
    move: 0,
    moveDuration: transitionDuration,
    isMoving: false,
  });

  const handleClick = e => {
    let next = {};
    if (switched.mode === 'light') {
      mode = modeType.dark;
      next = {
        mode,
        movePos: Number(pxScale3(1, width - height, '')),
        move: 1,
        moveDuration: transitionDuration,
      };
    } else {
      mode = modeType.light;
      next = {
        mode,
        movePos: 0,
        move: 0,
        moveDuration: transitionDuration,
      };
    }
    setSwitched(prev => ({ ...prev, ...next }));
    onClick(mode);
  };

  const handleDragStart = (e, screen) => {
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
    let next = {};
    let move =
      (switched.movePos + (xPos - switched.xPos)) /
      Number(pxScale3(1, width - height, ''));
    if (move > 0.5) {
      mode = modeType.dark;
      next = {
        mode,
        movePos: Number(pxScale3(1, width - height, '')),
        move: 1,
        moveDuration: (1 - move) * transitionDuration,
      };
    } else {
      mode = modeType.light;
      next = {
        mode,
        movePos: 0,
        move: 0,
        moveDuration: move * transitionDuration,
      };
    }
    setSwitched(prev => ({ ...prev, ...next, isMoving: false }));
    onClick(mode);
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
  };

  return <Component props={properties} />;
};
