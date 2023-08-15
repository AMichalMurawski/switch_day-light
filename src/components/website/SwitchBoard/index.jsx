import { SwitchBoardStyle } from './SwitchBoardStyle';
import { BoardSwitchBoolean } from './BoardSwitchBoolean';
import { BoardSwitchCustom } from './BoardSwitchCustom';
import { BoardSwitchDarkMode } from './BoardSwitchDarkMode';
export const SwitchBoard = ({
  switches,
  switchType,
  darkModeClick,
  booleanClick,
  customClick,
}) => {
  return (
    <SwitchBoardStyle $mode={switches.value}>
      {switchType === 'dark-mode' ? (
        <BoardSwitchDarkMode props={{ ...switches, onClick: darkModeClick }} />
      ) : switchType === 'boolean' ? (
        <BoardSwitchBoolean props={{ ...switches, onClick: booleanClick }} />
      ) : switchType === 'custom' ? (
        <BoardSwitchCustom props={{ ...switches, onClick: customClick }} />
      ) : null}
    </SwitchBoardStyle>
  );
};
