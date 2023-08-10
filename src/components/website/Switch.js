import styled from 'styled-components';

export const SwitchBox = styled.div`
  width: 100%;
  padding: 30px 0;

  .switch-selector {
    padding: 0 0 60px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
  }

  .selector-label {
    font-size: 16px;
    font-weight: 700;
  }

  .selector-select {
    font-size: 16px;
  }
`;

export const SwitchBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
  background-color: rgb(230, 230, 230);
`;
