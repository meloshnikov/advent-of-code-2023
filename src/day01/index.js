import { summary } from '../tools.js';

const digitsMap = {
  '1':      1,
  '2':      2,
  '3':      3,
  '4':      4,
  '5':      5,
  '6':      6,
  '7':      7,
  '8':      8,
  '9':      9,
  'one':    1,
  'two':    2,
  'three':  3,
  'four':   4,
  'five':   5,
  'six':    6,
  'seven':  7,
  'eight':  8,
  'nine':   9,
}

const regexpOne = new RegExp([...Object.keys(digitsMap)].slice(0, 9).join('|'), 'g');
const regexpTwo = new RegExp([...Object.keys(digitsMap)].join('|'), 'g');

const replaceSpellingWithNumbers = (str, part) => {
  const regexp = part === 1 ? regexpOne : regexpTwo;
  let match;
  let firstMatch;
  let lastMatch;

  while ((match = regexp.exec(str)) !== null) {
    if (!firstMatch) {
      firstMatch = digitsMap[match[0]];
    }
    lastMatch = digitsMap[match[0]];
    regexp.lastIndex = match.index + 1;
  }
  return  `${firstMatch}${lastMatch}`;
}

const solution = (input, part = 1) => {
  const lines = input
    .trim()
    .split(/\r?\n/)
    .map((str) => replaceSpellingWithNumbers(str, part))
    .reduce(summary)
  return lines;
}

export default solution;
