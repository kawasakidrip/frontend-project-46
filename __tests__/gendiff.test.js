#!/usr/bin/env node
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff tests', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const expectFile = readFile('expected_file.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(expectFile);
});

test('gendiff tests yml', () => {
  const filePath1 = getFixturePath('file1.yml');
  const filePath2 = getFixturePath('file2.yml');
  const expectFile = readFile('expected_file_yml.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(expectFile);
});
