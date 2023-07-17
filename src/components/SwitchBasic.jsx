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
        backgroundColor: `rgb(${255 - move * 255}, ${255 - move * 255}, ${
          255 - move * 255
        })`,
        boxShadow: `
        0 ${scale(1 / 15, height)} 
            ${scale(1 / 10, height)} rgb(0, 0, 0) inset,
        0 ${scale(1 / 30, height)} 
            ${scale(1 / 50, height)} rgb(255, 255, 255),
        0 ${scale(1 / 35, height)} 
            ${scale(1 / 50, height)} rgb(0, 0, 0)`,
        transition: !isMoving
          ? transition(moveDuration, ['background-color', 'box-shadow'])
          : null,
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
        {!switchChildren ? (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              backgroundImage: `radial-gradient(rgb(${255 - move * 55}, ${
                100 + move * 155
              }, 100) 0%, rgb( ${255 - move * 255}, ${
                0 + move * 255
              }, 0) 100%)`,
              borderRadius: '50%',
              transition: transition(moveDuration, 'background-image'),
            }}
          ></div>
        ) : (
          switchChildren()
        )}
      </div>
      {!boxChildren ? null : boxChildren()}
    </div>
  );
};
