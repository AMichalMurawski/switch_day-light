import styled from 'styled-components';

export const Page = styled.div`
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  background-color: lightgray;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    box-shadow: 0 0 2px green;
  }

  h1,
  h2,
  h3 {
    color: black;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 24px;
  }

  .wrapper {
    min-width: 340px;
    max-width: 1200px;
    padding: 30px 15px;
  }

  .full-size {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .font-size {
    font-size: ${props => props.$size};
  }

  .text-center {
    text-align: center;
  }
`;
