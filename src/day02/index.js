import { summary } from '../tools.js';

const colorsLimit = {
  green: 13,
  red: 12,
  blue: 14,
}

const colors = Object.keys(colorsLimit);

const getMaxColorValues = (arr, id) => {
  return arr.reduce((acc, str) => {
    const colorValues = str.match(/\d+ (\w+)/g);

    if (colorValues) {
      colorValues.forEach((colorValue) => {
        const [number, color] = colorValue.split(' ');
        const count = Number(number);

        if (!acc[color] || acc[color] < count) {
          acc[color] = count;
        }
      });
    }

    return { ...acc, id: id + 1 };
  }, {});
}

const getGameRounds = (string) => string.split(':')[1].split(';');

const isPassLimit = (shots) => !colors.find((color) => shots[color] > colorsLimit[color]);

const getId = ({id}) => id;

const multiplyColors = (shots) => colors.reduce((acc, color) => acc * shots[color], 1);

const solution = (input, part = 1) => {
  const lines = input
    .trim()
    .split(/\r?\n/)
    .map(getGameRounds)
    .map(getMaxColorValues)

    if (part === 1) {
      return lines.filter(isPassLimit).map(getId).reduce(summary);
    }

  return lines.map(multiplyColors).reduce(summary);
}

export default solution;
