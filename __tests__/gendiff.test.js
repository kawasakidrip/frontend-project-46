#!/usr/bin/env node
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/diff.js';

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

test('gendiff tests nested', () => {
  const filePath1 = getFixturePath('file1nested.json');
  const filePath2 = getFixturePath('file2nested.json');
  const expectFile = readFile('expected_file_nested.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(expectFile);
});

test('gendiff tests nested yml', () => {
  const filePath1 = getFixturePath('file1nested.yml');
  const filePath2 = getFixturePath('file2nested.yml');
  const expectFile = readFile('expected_file_nested_yml.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(expectFile);
});

test('gendiff plain test json', () => {
  const filePath1 = getFixturePath('file1nested.json');
  const filePath2 = getFixturePath('file2nested.json');
  const expectFile = readFile('expected_file_plain_json.txt');
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectFile);
});

test('gendiff plain test yml', () => {
  const filePath1 = getFixturePath('file1nested.yml');
  const filePath2 = getFixturePath('file2nested.yml');
  const expectFile = readFile('expected_file_plain_yml.txt');
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectFile);
});
