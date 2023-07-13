import { SwitchBasic } from './SwitchBasic';
import { SwitchHandler2 } from './SwitchHandler2';
import { SvgStar } from './data/SvgStar';
import { gradient2, pxScale3, transitionFunction } from './data/dimData';
import { cloudData1b, cloudData2b, starDatab } from './data/imageData';

export const SwitchDayNight2 = ({
  height,
  width,
  value,
  transitionDuration,
  onClick,
}) => {
  const design = props => ({
    boxStyle: {
      backgroundColor: `rgb(${51 - props.move * 55}, ${
        103 - props.move * 103
      }, ${193 - props.move * 159})`,
      boxShadow: `
            0 ${pxScale3(1 / 15, props.height)} 
              ${pxScale3(1 / 10, props.height)} rgb(0, 0, 0) inset,
            0 ${pxScale3(1 / 30, props.height)} 
              ${pxScale3(1 / 50, props.height)} rgb(250, 250, 250),
            0 ${pxScale3(1 / 35, props.height)} 
              ${pxScale3(1 / 50, props.height)} rgb(0, 0, 0)`,
      transition: !props.isMoving
        ? transitionFunction(props.moveDuration, [
            'background-color',
            'box-shadow',
          ])
        : null,
    },
    boxChildren: () => (
      <>
        <div
          style={{
            position: 'absolute',
            left: `${props.move * 10}%`,
            top: `${props.move * 100}%`,
            width: pxScale3(1, props.width),
            height: pxScale3(1, props.height),
            background: gradient2(
              props.width,
              props.height,
              cloudData1b,
              'rgb(255,255,255)'
            ),
            transition: !props.isMoving
              ? transitionFunction(props.moveDuration, ['top', 'left'])
              : null,
            zIndex: 15,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: `${props.move * 10}%`,
            top: `${props.move * 100}%`,
            width: pxScale3(1, props.width),
            height: pxScale3(1, props.height),
            background: gradient2(
              props.width,
              props.height,
              cloudData2b,
              'rgb(200,200,200)'
            ),
            transition: !props.isMoving
              ? transitionFunction(props.moveDuration, ['top', 'left'])
              : null,
            zIndex: 12,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: `${-10 + props.move * 10}%`,
            top: `${-100 + props.move * 100}%`,
            transition: !props.isMoving
              ? transitionFunction(props.moveDuration, ['top', 'left'])
              : null,
            zIndex: 15,
          }}
        >
          {starDatab.map((el, i) => {
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: pxScale3(el[0], props.width - props.height),
                  top: pxScale3(el[1], props.height),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SvgStar
                  scale={(el[2] * props.height) / 100}
                  color="rgb(250,250,250)"
                />
              </div>
            );
          })}
        </div>
      </>
    ),
  });

  const properties = {
    width:
      width < 2 * height ? 2 * height : width > 4 * height ? 4 * height : width,
    height: height,
    value: value === 1 ? 1 : 0,
    maxValue: 1,
    transitionDuration:
      transitionDuration < 0
        ? 0
        : transitionDuration > 3000
        ? 3000
        : transitionDuration,
    onClick,
    design,
  };

  return <SwitchHandler2 Component={SwitchBasic} props={properties} />;
};
