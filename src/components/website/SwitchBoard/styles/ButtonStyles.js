import styled from 'styled-components';

export const ButtonSubmit = styled.button.attrs(props => ({
  $isAllActive: props.$isAllActive | 0,
}))`
  width: 100px;
  height: 35px;
  border-radius: 35px;
  font-size: 18px;
  background-color: ${props =>
    props.$isAllActive === 0 ? 'lightgreen' : 'tomato'};
  }

  .button:active {
    background-color: ${props =>
      props.$isAllActive === 0 ? 'lawngreen' : 'orangered'};
  }
`;
