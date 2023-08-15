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
  $padtop: props.$switchHeight + 15 || '15',
}))`
  ${props => {
    const { $padtop } = props;
    return `
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: ${$padtop}px 15px 15px;
    `;
  }}
`;

export const BoardDarkMode = styled(Board).attrs(props => ({
  $mode: props.$mode || 0,
  $duration: props.$duration,
  $padtop: props.$switchHeight + 15 || '15',
}))`
  ${props => {
    const { $mode, $duration } = props;
    return `
      position: relative;
      color: ${$mode === 0 ? 'black' : 'white'};
      background-color: ${
        $mode === 0 ? 'rgb(240, 240, 240)' : 'rgb(10, 10, 10)'
      };
      transition: ${transitionF({
        duration: $duration,
        props: ['background-color', 'color'],
      })};
    `;
  }}
`;

export const BoardBoolean = styled(Board)`
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const TextBox = styled.p.attrs(props => ({
  $weight: props.$fontWeight,
}))`
  font-size: 18px;
  font-weight: ${props => props.$weight};
`;
