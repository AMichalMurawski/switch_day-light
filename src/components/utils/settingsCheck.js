export const settingsCheck = settings => {
  for (const [key, value] of Object.entries(settings)) {
    switch (key) {
      case 'height':
        console.log(settings.height);
        checkValue(key, value, 0);
        break;
      case 'width':
        checkValue(key, value, settings.height);
        break;
      case 'maxValue':
        checkValue(key, value, 1, '', value);
        break;
      case 'value':
        checkValue(key, value, 0, 'maxValue', settings.maxValue);
        break;
      case 'duration':
        checkValue(key, value, 0, 'time [ms]', 3000);
        break;
      case 'switchRadius':
        checkValue(key, value, 0, '', 1);
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
  if (!maxValue) return;
  if (value > maxValue) {
    throw new Error(
      `${key} = ${value} can't be higher than ${maxKey}${
        !maxKey ? '' : ' = '
      }${maxValue}`
    );
  }
};

const checkValue = (key, value, minValue, maxKey, maxValue) => {
  isNumeric(key, value);
  notLower(key, value, minValue);
  notHigher(key, value, maxKey, maxValue);
};
