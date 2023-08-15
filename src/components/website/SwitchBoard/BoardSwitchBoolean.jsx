import { useState } from 'react';
import { SwitchBoolean } from '../../switches';
import { BoardBoolean } from './styles/BoardStyles';
import { SwitchTextWrapper } from './styles/WrapperStyles';
import { TextBoxBoolean } from './styles/TextStyles';

export const BoardSwitchBoolean = ({ props }) => {
  const [state, setState] = useState({
    props1: { ...props, value: 1 },
    props2: { ...props, value: 1 },
    props3: { ...props, value: 1 },
  });

  const handleClick = (nr, value) => {
    setState(prev => ({
      ...prev,
      [`props${nr}`]: { ...state[`props${nr}`], value },
    }));
  };

  return (
    <BoardBoolean>
      <SwitchTextWrapper>
        <TextBoxBoolean
          $value={state.props1.value}
          $duration={state.props1.duration}
        >
          Similique error modi fugit ducimus odio impedit, mollitia earum porro
          minima officiis iusto laborum voluptas eius iure est eum, molestias
          veritatis laboriosam?
        </TextBoxBoolean>
        <SwitchBoolean
          height={state.props1.height}
          width={state.props1.width}
          switchRadius={state.props1.switchRadius}
          value={state.props1.value}
          duration={state.props1.duration}
          draggable={state.props1.draggable}
          switchColors={state.props1.switchColors}
          backgroundColors={state.props1.backgroundColors}
          IconYes={state.props1.IconYes}
          IconNo={state.props1.IconNo}
          onClick={value => handleClick(1, value)}
        />
      </SwitchTextWrapper>
      <SwitchTextWrapper>
        <TextBoxBoolean
          $value={state.props2.value}
          $duration={state.props2.duration}
        >
          Reiciendis non magnam exercitationem rerum autem quod minima eos
          dolorem saepe temporibus?
        </TextBoxBoolean>
        <SwitchBoolean
          height={state.props2.height}
          width={state.props2.width}
          switchRadius={state.props2.switchRadius}
          value={state.props2.value}
          duration={state.props2.duration}
          draggable={state.props2.draggable}
          switchColors={state.props2.switchColors}
          backgroundColors={state.props2.backgroundColors}
          IconYes={state.props2.IconYes}
          IconNo={state.props2.IconNo}
          onClick={value => handleClick(2, value)}
        />
      </SwitchTextWrapper>
      <SwitchTextWrapper>
        <TextBoxBoolean
          $value={state.props3.value}
          $duration={state.props3.duration}
        >
          Pariatur quis odit, animi ea impedit quidem?
        </TextBoxBoolean>
        <SwitchBoolean
          height={state.props3.height}
          width={state.props3.width}
          switchRadius={state.props3.switchRadius}
          value={state.props3.value}
          duration={state.props3.duration}
          draggable={state.props3.draggable}
          switchColors={state.props3.switchColors}
          backgroundColors={state.props3.backgroundColors}
          IconYes={state.props3.IconYes}
          IconNo={state.props3.IconNo}
          onClick={value => handleClick(3, value)}
        />
      </SwitchTextWrapper>
    </BoardBoolean>
  );
};
