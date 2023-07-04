export const modeType = {
  light: 'light',
  dark: 'dark',
};

export const transitionFunction = (duration, properties) => {
  if (typeof properties === 'string')
    return `${properties} ${duration}ms ease-out`;
  return properties.map(prop => `${prop} ${duration}ms ease-out`);
};

export const pxScale = (scale, px) => {
  return `${(scale * px) / 4}px`;
};

export const pxScale2 = (scale, px) => {
  return (scale * px) / 4;
};

export const gradient = (scale, data, color) => {
  const dataGradient = data.map(
    el =>
      `radial-gradient(
          circle at ${pxScale(scale, el[0])} ${pxScale(scale, el[1])}, 
          ${color} ${el[2]}%, transparent ${el[2]}%)`
  );
  return dataGradient.join(', ');
};
