import { MainStyle } from './MainStyle';

export const Main = ({ children }) => {
  return (
    <MainStyle>
      <div className="wrapper full-size">{children}</div>
    </MainStyle>
  );
};
