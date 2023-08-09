const globalOptions = {
  height: {
    exist: true,
    editable: true,
    name: 'height',
    default: 30,
    unit: 'px',
    description: 'Switch height property. Min value 0.',
  },
  width: {
    exist: true,
    editable: true,
    name: 'width',
    default: 60,
    unit: 'px',
    description: "Switch width property. Min value '2 x height.'",
  },
  switchRadius: {
    exist: true,
    editable: false,
    name: 'switchRadius',
    default: 0.6,
    unit: '',
    description:
      "Switch's button property. Value 0-1 with decimal values, where 1 is equal to the 'height'.",
  },
  value: {
    exist: true,
    editable: true,
    name: 'value',
    default: 0,
    unit: '',
    description:
      "Button property. Value 0-1, where 0 is left position and 'maxValue' is right position.",
  },
  maxValue: {
    exist: true,
    editable: false,
    name: 'maxValue',
    default: 1,
    unit: '',
    description:
      "Max value for property 'value'. Editable only in SwitchCustom.",
  },
  duration: {
    exist: true,
    editable: true,
    name: 'duration',
    default: 300,
    unit: 'ms',
    description: "Time for transition's duration property. Max value 5000.",
  },
  draggable: {
    exist: true,
    editable: true,
    name: 'draggable',
    default: 'false',
    unit: 'boolean',
    description:
      'Specifies whether the button should be draggable. Value = true / false',
  },
  onClick: {
    exist: true,
    editable: true,
    name: 'onClick',
    default: '() => {}',
    unit: 'function',
    description:
      "Response function for change button's position in switch (both click and drag events).",
  },
  switchColors: {
    exist: false,
    editable: false,
    name: 'switchColors',
    default: '[]',
    unit: 'Array',
    description: 'Button colors for each button positions.',
  },
  backgroundColors: {
    exist: false,
    editable: false,
    name: 'backgroundColors',
    default: '[]',
    unit: 'Array',
    description:
      "Switch's wrapper background colors for each button positions.",
  },
  IconYes: {
    exist: false,
    editable: false,
    name: 'IconYes',
    default: '<IconCheckMark />',
    unit: 'component',
    description: 'Component in button for position in value 0 (true).',
  },
  IconNo: {
    exist: false,
    editable: false,
    name: 'IconNo',
    default: '<IconCross />',
    unit: 'component',
    description: 'Component in button for position in value 1 (false).',
  },
  boxStyle: {
    exist: false,
    editable: false,
    name: 'boxStyle',
    default: '{}',
    unit: 'object',
    description: 'Properties for switch styles.',
  },
  BoxChildren: {
    exist: false,
    editable: false,
    name: 'BoxChildren',
    default: '<BoxChildrenDefaultComponent />',
    unit: 'component',
    description: "Component in switch's wrapper.",
  },
  SwitchChildren: {
    exist: false,
    editable: false,
    name: 'SwitchChildren',
    default: '<BoxChildrenDefaultComponent />',
    unit: 'component',
    description: "Component in switch's button.",
  },
};

const switchDayNight = {
  name: 'switch day-night',
  properties: globalOptions,
};

const switchYesNo = {
  name: 'switch yes-no',
  properties: {
    ...globalOptions,
    switchRadius: {
      editable: true,
    },
    switchColors: {
      exist: true,
      editable: true,
    },
    backgroundColors: {
      exist: true,
      editable: true,
    },
  },
};

const switchCustom = {
  name: 'custom switch',
  properties: {
    ...globalOptions,
    switchRadius: {
      editable: true,
    },
    maxValue: {
      editable: true,
    },
    IconYes: {
      exist: true,
      editable: true,
    },
    IconNo: {
      exist: true,
      editable: true,
    },
    boxStyle: {
      exist: true,
      editable: true,
    },
    BoxChildren: {
      exist: true,
      editable: true,
    },
    SwitchChildren: {
      exist: true,
      editable: true,
    },
  },
};

const switchOptions = switchType => {
  switch (switchType) {
    case 'dayNight':
      return switchDayNight;
      break;
    case 'yesNo':
      return switchYesNo;
      break;
    case 'custom':
      return switchCustom;
      break;
    default:
      return {};
  }
};
