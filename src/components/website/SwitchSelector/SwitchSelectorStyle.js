import styled from 'styled-components';

export const SwitchSelectorStyle = styled.form`
  padding: 0 0 30px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;

  & label {
    font-size: 16px;
    font-weight: 700;
    padding: 2px;
  }

  & select {
    font-size: 16px;
    padding: 2px;
  }
`;
