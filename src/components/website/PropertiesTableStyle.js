import styled from 'styled-components';

export const PropertiesTable = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  table {
    border: 2px solid black;
  }

  thead {
    padding: 15px;
  }

  th,
  td {
    padding: 5px 10px;
    width: auto;
  }

  th:not(:last-child) {
    border-right: 2px solid black;
  }
`;
