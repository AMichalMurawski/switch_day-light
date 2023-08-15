import styled from 'styled-components';

const transitionF = ({ duration, props }) => {
  if (typeof props === 'string') {
    return `${props} ${duration}ms ease-out`;
  }
  if (Array.isArray(props)) {
    const arrayTrans = props
      .map(prop => {
        if (typeof prop === 'string') {
          return `${prop} ${duration}ms ease-out`;
        }
        return null;
      })
      .join(', ');
    return arrayTrans;
  }
};

export const Board = styled.div.attrs(props => ({
  $mode: props.$mode || 0,
  $duration: props.$duration,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 15px;
  color: ${props => (props.$mode === 1 ? 'white' : null)};
  background-color: ${props =>
    props.$mode === 1 ? 'rgb(100, 100, 100)' : null};
  transition: ${props =>
    transitionF({
      duration: props.$duration,
      props: ['background-color', 'color'],
    })};
`;

export const SwitchWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const TextWrapper = styled.div.attrs(props => ({
  $padtop: props.$switchHeight,
}))`
  padding-top: ${props => props.$padtop}px;
`;

export const TextBox = styled.p.attrs(props => ({
  $weight: props.$fontWeight,
}))`
  font-size: 18px;
  font-weight: ${props => props.$weight};
  padding-bottom: 15px;
`;
