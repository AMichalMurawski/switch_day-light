export const transition = (duration, properties) => {
  if (typeof properties === 'string')
    return `${properties} ${duration}ms ease-out`;
  return properties.map(prop => `${prop} ${duration}ms ease-out`);
};

export const scale = (scale, px, subfix = 'px') => {
  return `${scale * px}${subfix}`;
};

export const gradient = (width, height, data, color) => {
  const dataGradient = data.map(
    el =>
      `radial-gradient(
          circle at ${scale(el[0], width)} ${scale(el[1], height)}, 
          ${color} ${el[2]}%, transparent ${el[2]}%)`
  );
  return dataGradient.join(', ');
};
