import { objectStingify } from '../tools.js';

const labels = {
  deleted: '- ',
  added: '+ ',
  nested: '  ',
  unchanged: '  ',
};

const makeDiffString = (indent, type, key, value, depth) => `${indent}${labels[type]}${key}: ${objectStingify(value, depth + 1)}`;

const stylish = (tree, spacesCount = 4, replacer = ' ') => {
  const iter = (el, depth) => {
    const indentSize = depth * spacesCount;
    const indent = replacer.repeat(indentSize - 2);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = el.map(({ key, value, status }) => {
      if (status === 'nested') {
        return `${indent}${labels.nested}${key}: ${iter(value, depth + 1)}`;
      } if (status === 'deleted') {
        return makeDiffString(indent, 'deleted', key, value, depth);
      } if (status === 'added') {
        return makeDiffString(indent, 'added', key, value, depth);
      } if (status === 'changed') {
        return `${makeDiffString(indent, 'deleted', key, value.oldValue, depth)}\n${makeDiffString(indent, 'added', key, value.newValue, depth)}`;
      } if (status === 'unchanged') {
        return makeDiffString(indent, 'unchanged', key, value, depth);
      }
      throw new Error('Unexpected status!');
    });
    const result = ['{', ...lines, `${bracketIndent}}`].join('\n');
    return result;
  };
  return iter(tree, 1);
};

export default stylish;
