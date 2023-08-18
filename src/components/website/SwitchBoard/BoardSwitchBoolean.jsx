import { useEffect, useState } from 'react';
import { SwitchBoolean } from '../../switches';
import { BoardBoolean } from './styles/BoardStyles';
import { SwitchTextWrapper } from './styles/WrapperStyles';
import { TextBoxBoolean } from './styles/TextStyles';
import { ButtonSubmit } from './styles/ButtonStyles';

export const BoardSwitchBoolean = ({ props }) => {
  const [state, setState] = useState({
    ...props,
    switch1: { key: 1, value: 1 },
    switch2: { key: 1, value: 1 },
    switch3: { key: 1, value: 1 },
    isAllValue: 1,
  });

  const handleClick = (nr, value) => {
    setState(prev => ({
      ...prev,
      [`switch${nr}`]: {
        key: value,
        value: value,
      },
    }));
  };

  useEffect(() => {
    if (state.switch1.value + state.switch2.value + state.switch3.value === 0) {
      setState(prev => ({ ...prev, isAllValue: 0 }));
    } else {
      setState(prev => ({ ...prev, isAllValue: 1 }));
    }
  }, [state.switch1.value, state.switch2.value, state.switch3.value]);

  const submitClick = () => {
    if (state.isAllValue === 0) {
      setState(prev => ({
        ...prev,
        switch1: { ...prev.switch1, key: 1, value: 1 },
        switch2: { ...prev.switch2, key: 1, value: 1 },
        switch3: { ...prev.switch3, key: 1, value: 1 },
      }));
    }
  };

  return (
    <BoardBoolean>
      <SwitchTextWrapper>
        <TextBoxBoolean $value={state.switch1.value} $duration={state.duration}>
          Similique error modi fugit ducimus odio impedit, mollitia earum porro
          minima officiis iusto laborum voluptas eius iure est eum, molestias
          veritatis laboriosam?
        </TextBoxBoolean>
        <SwitchBoolean
          key={state.switch1.key}
          height={state.height}
          width={state.width}
          switchRadius={state.switchRadius}
          value={state.switch1.value}
          duration={state.duration}
          draggable={state.draggable}
          switchColors={state.switchColors}
          backgroundColors={state.backgroundColors}
          IconYes={state.IconYes}
          IconNo={state.IconNo}
          onClick={value => handleClick(1, value)}
        />
      </SwitchTextWrapper>
      <SwitchTextWrapper>
        <TextBoxBoolean $value={state.switch2.value} $duration={state.duration}>
          Reiciendis non magnam exercitationem rerum autem quod minima eos
          dolorem saepe temporibus?
        </TextBoxBoolean>
        <SwitchBoolean
          key={state.switch2.key}
          height={state.height}
          width={state.width}
          switchRadius={state.switchRadius}
          value={state.switch2.value}
          duration={state.duration}
          draggable={state.draggable}
          switchColors={state.switchColors}
          backgroundColors={state.backgroundColors}
          IconYes={state.IconYes}
          IconNo={state.IconNo}
          onClick={value => handleClick(2, value)}
        />
      </SwitchTextWrapper>
      <SwitchTextWrapper>
        <TextBoxBoolean $value={state.switch3.value} $duration={state.duration}>
          Pariatur quis odit, animi ea impedit quidem?
        </TextBoxBoolean>
        <SwitchBoolean
          key={state.switch3.key}
          height={state.height}
          width={state.width}
          switchRadius={state.switchRadius}
          value={state.switch3.value}
          duration={state.duration}
          draggable={state.draggable}
          switchColors={state.switchColors}
          backgroundColors={state.backgroundColors}
          IconYes={state.IconYes}
          IconNo={state.IconNo}
          onClick={value => handleClick(3, value)}
        />
      </SwitchTextWrapper>
      <ButtonSubmit
        className="button"
        $isAllActive={state.isAllValue}
        onClick={submitClick}
      >
        Submit
      </ButtonSubmit>
    </BoardBoolean>
  );
};
