import { useEffect, useState } from 'react';
import { scale } from './utils/dimData';
import { settingsCheck } from './utils/settingsCheck';

export const SwitchHandler = props => {
  const { Component, settings } = props;
  const {
    width = 100,
    height = 200,
    switchRadius = 0.75,
    value = 0,
    maxValue = 1,
    moveType = 'revalue',
    draggable = false,
    duration = 500,
    onClick = () => {},
    design = {
      boxStyle: null,
      boxChildren: null,
      switchChildren: null,
    },
    ...rest
  } = settings;

  useEffect(() => {
    settingsCheck({ switchRadius });
  }, [switchRadius]);

  const valPer = value => Math.round(value) / maxValue;

  const [switching, setSwitching] = useState({
    value,
    movePos: Number(scale(valPer(value), width - height, '')),
    xPos: 0,
    move: valPer(value),
    moveDuration: duration,
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
      movePos: Number(scale(move, width - height, '')),
      moveDuration: duration * (Math.abs(newValue - value) / maxValue),
    };

    setSwitching(prev => ({ ...prev, ...next }));
    onClick(newValue);
  };

  const handleDragStart = (e, screen) => {
    if (draggable === false) return;
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    setSwitching(prev => ({ ...prev, xPos, isMoving: true }));
  };

  const handleDrag = (e, screen) => {
    if (draggable === false) return;
    let xPos = null;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    if (xPos === 0) return;
    let move =
      (switching.movePos + (xPos - switching.xPos)) /
      Number(scale(1, width - height, ''));
    if (move < 0) move = 0;
    if (move > 1) move = 1;
    setSwitching(prev => ({
      ...prev,
      move: move,
    }));
  };

  const handleDragEnd = (e, screen) => {
    if (draggable === false) return;
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    let checkMove =
      (switching.movePos + (xPos - switching.xPos)) /
      Number(scale(1, width - height, ''));
    if (checkMove < 0) checkMove = 0;
    if (checkMove > 1) checkMove = 1;
    const checkValue = checkMove * maxValue;
    let value = Math.round(checkValue);
    const move = valPer(value);
    const scaleDuration =
      value > checkValue
        ? Math.abs(value - checkValue)
        : Math.abs(checkValue - value);
    const next = {
      value,
      movePos: Number(scale(valPer(value), width - height, '')),
      move,
      moveDuration: scaleDuration * duration,
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
    switchRadius,
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

  return <Component settings={properties} />;
};
