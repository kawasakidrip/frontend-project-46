import _ from 'lodash';

const isComplexValue = (value) => _.isObject(value);

const isOkeyWithoutQuotes = (value) => {
  if (value === null) return true;
  switch (typeof value) {
    case 'boolean':
      return true;
    case 'number':
      return true;
    default:
      return false;
  }
};

const getPlainValue = (value) => {
  if (isOkeyWithoutQuotes(value)) return `${value}`;
  if (isComplexValue(value)) return '[complex value]';
  return `'${value}'`;
};

const plain = (tree) => {
  const iter = (el, keysBefore = []) => {
    const lines = el.flatMap(({ key, value, status }) => {
      const pathToValue = [...keysBefore, key].join('.');
      if (status === 'nested') {
        return [`${iter(value, [...keysBefore, key])}`];
      } if (status === 'deleted') {
        return [`Property '${pathToValue}' was removed`];
      } if (status === 'added') {
        return [`Property '${pathToValue}' was added with value: ${getPlainValue(value)}`];
      } if (status === 'changed') {
        return [`Property '${pathToValue}' was updated. From ${getPlainValue(value.oldValue)} to ${getPlainValue(value.newValue)}`];
      } if (status === 'unchanged') {
        return [];
      }
      throw new Error('Unknown format!');
    });
    return lines.join('\n');
  };
  return iter(tree);
};

export default plain;
