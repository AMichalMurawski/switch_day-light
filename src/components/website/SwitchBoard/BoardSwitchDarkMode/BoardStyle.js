import styled from 'styled-components';

export const Board = styled.div.attrs(props => ({
  mode: props.$mode || 0,
  duration: props.$duration,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
  background-color: ${props =>
    props.mode === 1 ? 'rgb(100, 100, 100)' : null};
  transition: background-color ${props => props.duration}ms ease-out;
`;
