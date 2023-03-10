import _ from 'lodash';

const getCompare = (data1, data2) => {
  const property1 = Object.keys(data1);
  const property2 = Object.keys(data2);

  const compare = _.union(property1, property2);
  return compare.sort();
};

const objectStingify = (value, depth) => {
  if (!_.isObject(value)) return `${value}`;

  const replacer = ' ';
  const spacesCount = 4;

  const indentSize = depth * spacesCount;
  const indent = replacer.repeat(indentSize);
  const bracketIndent = replacer.repeat(indentSize - spacesCount);

  const lines = Object.entries(value).map(([key, val]) => `${indent}${key}: ${objectStingify(val, depth + 1)}`);
  const result = ['{', ...lines, `${bracketIndent}}`].join('\n');
  return result;
};

const getTree = (data1, data2) => {
  const union = getCompare(data1, data2);
  const result = union.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, value: getTree(data1[key], data2[key]), status: 'nested' };
    } if (!Object.hasOwn(data2, key)) {
      return ({ key, value: data1[key], status: 'deleted' });
    } if (!Object.hasOwn(data1, key)) {
      return ({ key, value: data2[key], status: 'added' });
    } if (data1[key] !== data2[key]) {
      return ({ key, value: { oldValue: data1[key], newValue: data2[key] }, status: 'changed' });
    } if (data1[key] === data2[key]) {
      return ({ key, value: data1[key], status: 'unchanged' });
    }
    return new Error('Something went wrong.. Try again!');
  });
  return result;
};

export { getCompare, objectStingify, getTree };
