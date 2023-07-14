import { useState } from 'react';
import { pxScale3 } from './data/dimData';

export const SwitchHandler = ({ Component, props }) => {
  const {
    width,
    height,
    value,
    maxValue = 1,
    moveType = 'revalue',
    transitionDuration,
    onClick,
    design,
    ...rest
  } = props;

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
    const { value } = switching;

    let newValue, moveClick, actualMove;

    switch (moveType) {
      case 'step':
        moveClick =
          (e.clientX - e.currentTarget.offsetLeft - height / 2) /
          (width - height);
        moveClick = moveClick < 0 ? 0 : moveClick > 1 ? 1 : moveClick;
        actualMove = value / maxValue;
        newValue =
          moveClick > actualMove
            ? value + 1
            : moveClick < actualMove
            ? value - 1
            : value;
        break;
      case 'position':
        moveClick =
          (e.clientX - e.currentTarget.offsetLeft - height / 2) /
          (width - height);
        moveClick = moveClick < 0 ? 0 : moveClick > 1 ? 1 : moveClick;
        newValue = Math.round(moveClick * maxValue);
        break;
      default:
        newValue = value === 0 ? maxValue : 0;
    }

    const move = newValue / maxValue;
    const next = {
      value: newValue,
      move,
      movePos: Number(pxScale3(move, width - height, '')),
      moveDuration:
        transitionDuration * (Math.abs(newValue - value) / maxValue),
    };

    setSwitching(prev => ({ ...prev, ...next }));
    onClick(newValue);
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
    let value = Math.round(checkValue);
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
    onClick(value);
  };

  const handleMove = move => {
    const value = Math.round(move * maxValue);
    setSwitching(prev => ({ ...prev, value, move }));
    onClick(value);
  };

  const properties = {
    ...rest,
    width,
    height: height,
    move: switching.move,
    isMoving: switching.isMoving,
    moveDuration: switching.moveDuration,
    design,
    handleClick,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleMove,
  };

  return <Component props={properties} />;
};
