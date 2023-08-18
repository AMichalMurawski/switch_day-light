import styled from 'styled-components';

export const TableWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border: 2px solid black;

  tr {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .col1 {
    flex-basis: 20%;
    max-width: 140px;
  }
  .col2 {
    flex-basis: 10%;
    max-width: 80px;
  }
  .col3 {
    flex-basis: 10%;
    max-width: 80px;
  }
  .col4 {
    // flex-basis: 60%;
    width: auto;
  }
`;

export const TableHeader = styled.thead`
  padding: 15px;
  width: 100%;

  th {
    padding: 5px 10px;
    width: auto;
  }
`;

export const TableBody = styled.tbody`
  border: 2px solid black;

  td {
    padding: 5px 10px;
    width: auto;
  }
`;
