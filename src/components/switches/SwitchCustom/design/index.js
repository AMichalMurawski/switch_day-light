export const design = props => {
  const { boxStyle, BoxChildren, SwitchChildren, ...settings } = props;

  return {
    boxStyle: !boxStyle ? null : boxStyle(settings),
    boxChildren: !BoxChildren
      ? null
      : () => <BoxChildren settings={settings} />,
    switchChildren: !SwitchChildren
      ? null
      : () => <SwitchChildren settings={settings} />,
  };
};
