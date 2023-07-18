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
        backgroundColor: `rgb(${255 - move * 100}, ${255 - move * 100}, ${
          255 - move * 100
        })`,
        boxShadow: `
        0 ${scale(0.02, height)} 
            ${scale(0.05, height)} rgb(0, 0, 0) inset,
        0 ${scale(0.06, height)} 
            ${scale(0.04, height)} rgb(200, 200, 200) inset,
        0 ${scale(0.03, height)} 
            ${scale(0.02, height)} rgb(255, 255, 255),
        0 ${scale(0.03, height)} 
            ${scale(0.02, height)} rgb(0, 0, 0)`,
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
              backgroundColor: `rgb(${200 + move * 55}, ${
                255 - move * 155
              }, 0)`,
              boxShadow: `0 0 ${scale(0.12 * 0.8, height)} 
                  rgb(0, 0, 0, 0.5) inset,
                0 0 ${scale(0.5 * 0.8, height)} 
                  rgb(${0 + move * 255}, 
                ${255 - move * 255}, 100) inset, 
                0 0 ${scale(0.04 * 0.8, height)} black, 
                0 0 ${scale(0.1 * 0.8, height)} gray`,
              borderRadius: '50%',
              transition: transition(moveDuration, [
                'background-color',
                'box-shadow',
              ]),
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
