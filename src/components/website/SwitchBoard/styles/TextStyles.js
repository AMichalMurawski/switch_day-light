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

export const TextBox = styled.p.attrs(props => ({
  $weight: props.$fontWeight,
}))`
  width: 100%;
  font-size: 18px;
  font-weight: ${props => props.$weight};
`;

export const TextBoxBoolean = styled(TextBox).attrs(props => ({
  $value: props.$value,
  $duration: props.$duration,
}))`
  color: ${props => (props.$value === 1 ? 'rgb(210, 210, 210)' : null)};
  background-color: ${props =>
    props.$value === 1 ? 'rgb(100, 100, 100)' : null};
  transition: ${props =>
    transitionF(props.$duration, ['color', 'background-color'])};
`;
