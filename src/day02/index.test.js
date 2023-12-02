import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import solution from './index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const inputFile = readFileSync(getFixturePath('input.txt'), { encoding: 'utf8', flag: 'r' });


test('--- Part One: digits in line ---', () => {
  expect(solution(inputFile, 1)).toEqual(2285);
});

test('--- Part Two: some of the digits are actually spelled out with letters ---', () => {
  expect(solution(inputFile, 2)).toEqual(77021);
});
