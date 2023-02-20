#!/usr/bin/env node
import { expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

//const filePath1 = getFixturePath('file1.json');
//const filePath2 = getFixturePath('file2.json');

test('gendiff tests', () => {
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(`{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }`);
});
