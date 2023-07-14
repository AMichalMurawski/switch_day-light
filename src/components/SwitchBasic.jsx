import { transition, scale } from './utils/dimData';

export const SwitchBasic = ({ props }) => {
  const {
    height,
    width,
    move,
    isMoving,
    moveDuration,
    design,
    handleClick,
    handleDragStart,
    handleDrag,
    handleDragEnd,
  } = props;

  const boxStyle = design(props).boxStyle;
  const boxChildren = design(props).boxChildren;
  const switchChildren = design(props).switchChildren;

  return (
    <div
      style={{
        ...boxStyle,
        position: 'relative',
        minWidth: scale(1, width),
        width: scale(1, width),
        minHeight: scale(1, height),
        height: scale(1, height),
        borderRadius: scale(1 / 2, height),
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {/* switch */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          transform: `translateX(${scale(move, width - height)})`,
          width: scale(1, height),
          height: scale(1, height),
          borderRadius: '50%',
          transition: !isMoving ? transition(moveDuration, 'transform') : null,
          zIndex: 20,
        }}
        onDragStart={e => handleDragStart(e, 'drag')}
        onTouchStart={e => handleDragStart(e, 'touch')}
        onDrag={e => handleDrag(e, 'drag')}
        onTouchMove={e => handleDrag(e, 'touch')}
        onDragEnd={e => handleDragEnd(e, 'drag')}
        onTouchEnd={e => handleDragEnd(e, 'touch')}
      >
        {!switchChildren ? null : switchChildren()}
      </div>
      {!boxChildren ? null : boxChildren()}
    </div>
  );
};
