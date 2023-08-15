import { SwitchSelectorStyle } from './SwitchSelectorStyle';

export const SwitchSelector = ({ switchType, onChange }) => {
  return (
    <SwitchSelectorStyle className="switch-selector" name="selectSwitch">
      <label htmlFor="selectSW">Select switch:</label>
      <select
        id="selectSW"
        name="selectSW"
        defaultValue={switchType}
        onChange={e => onChange(e.target.value)}
      >
        <option value="dark-mode">Dark mode switch</option>
        <option value="boolean">Boolean switch</option>
        <option value="custom">Custom switch</option>
      </select>
    </SwitchSelectorStyle>
  );
};
