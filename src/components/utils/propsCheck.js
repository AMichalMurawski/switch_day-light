export const propsCheck = props => {
  for (const [key, value] of Object.entries(props)) {
    switch (key) {
      case 'height':
      case 'width':
        checkValue(key, value, 0);
        break;
      case 'maxValue':
        checkValue(key, value, 1, ' ', value);
        break;
      case 'value':
        checkValue(key, value, 0, 'maxValue', props.maxValue);
        break;
      case 'duration':
        checkValue(key, value, 0, 'time [ms]', 3000);
        break;
      default:
        throw new Error(`don't recognize prop ${key}`);
    }
  }
};

const isNumeric = (key, value) => {
  if (isNaN(value)) {
    throw new Error(`${key} = ${value} must be numeric`);
  }
};

const notLower = (key, value, minValue) => {
  if (!minValue) return;
  if (value < minValue) {
    throw new Error(`${key} = ${value} can't be lower than 0`);
  }
};

const notHigher = (key, value, maxKey, maxValue) => {
  if (!maxKey || !maxValue) return;
  if (value > maxValue) {
    throw new Error(
      `${key} = ${value} can't be higher than ${maxKey} = ${maxValue}`
    );
  }
};

const checkValue = (key, value, minValue, maxKey, maxValue) => {
  isNumeric(key, value);
  notLower(key, value, minValue);
  notHigher(key, value, maxKey, maxValue);
};
