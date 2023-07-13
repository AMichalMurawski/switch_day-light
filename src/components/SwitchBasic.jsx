import { moonData1b, moonData2b } from './data/imageData';
import { transitionFunction, pxScale3, gradient2 } from './data/dimData';

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

  return (
    <div
      style={{
        ...boxStyle,
        position: 'relative',
        minWidth: pxScale3(1, width),
        width: pxScale3(1, width),
        minHeight: pxScale3(1, height),
        height: pxScale3(1, height),
        borderRadius: pxScale3(1 / 2, height),
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
          transform: `translateX(${pxScale3(move, width - height)})`,
          width: pxScale3(1, height),
          height: pxScale3(1, height),
          borderRadius: '50%',
          transition: !isMoving
            ? transitionFunction(moveDuration, 'transform')
            : null,
          zIndex: 20,
        }}
        onDragStart={e => handleDragStart(e, 'drag')}
        onTouchStart={e => handleDragStart(e, 'touch')}
        onDrag={e => handleDrag(e, 'drag')}
        onTouchMove={e => handleDrag(e, 'touch')}
        onDragEnd={e => handleDragEnd(e, 'drag')}
        onTouchEnd={e => handleDragEnd(e, 'touch')}
      >
        <div
          style={{
            position: 'absolute',
            transform: `translate(${pxScale3(-0.88, height)}, ${pxScale3(
              -0.88,
              height
            )})`,
            width: pxScale3(2.76, height),
            height: pxScale3(2.76, height),
            borderRadius: '50%',
            background: `radial-gradient(
              rgba(255, 255, 255, 0.40), 
              rgba(255, 255, 255, 0.40) 32%,
              rgba(255, 255, 255, 0.25) 36%,
              rgba(255, 255, 255, 0.25) 48%,
              rgba(255, 255, 255, 0.15) 53%,
              rgba(255, 255, 255, 0.15) 65%,
              rgba(255, 255, 255, 0) 70%)`,
            opacity: 1 - move * 0.4,
            transition: !isMoving
              ? transitionFunction(moveDuration, 'opacity')
              : null,
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: pxScale3(0.8, height),
            height: pxScale3(0.8, height),
            borderRadius: pxScale3(0.4, height),
            boxShadow: `${pxScale3(1 / 45, height)} ${pxScale3(1 / 45, height)} 
                ${pxScale3(1 / 30, height)} rgb(30, 30, 30)`,
            overflow: 'hidden',
          }}
        >
          {/* moon */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: pxScale3(0.8, height),
              height: pxScale3(0.8, height),
              borderRadius: pxScale3(0.4, height),
              background: `
                ${gradient2(height, height, moonData1b, 'rgb(155, 155, 155)')}, 
                ${gradient2(height, height, moonData2b, 'rgb(130, 130, 130)')}, 
                radial-gradient( circle at
                  ${pxScale3(1 / 5, height)} ${pxScale3(1 / 5, height)}, 
                  rgb(200,200,200) 100%, transparent 100%)`,
              boxShadow: `
                ${pxScale3(-1 / 50, height)} ${pxScale3(-1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(150, 150, 150) inset,
                ${pxScale3(1 / 50, height)} ${pxScale3(1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(250, 250, 250) inset`,
            }}
          />
          {/* sun */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(${-50 + move * 100}%, -50%)`,
              width: pxScale3(0.8, height),
              height: pxScale3(0.8, height),
              borderRadius: pxScale3(0.4, height),
              backgroundColor: `rgb(
                ${229 - move * 229}, 
                ${195 - move * 195}, 
                ${41 - move * 49})`,
              boxShadow: `
                ${pxScale3(-1 / 50, height)} ${pxScale3(-1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(150, 150, 150) inset,
                ${pxScale3(1 / 50, height)} ${pxScale3(1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(250, 250, 250) inset`,
              transition: !isMoving
                ? transitionFunction(moveDuration, [
                    'transform',
                    'background-color',
                  ])
                : null,
            }}
          />
        </div>
        {/* {--> not basic 3} */}
      </div>

      {boxChildren()}
    </div>
  );
};
