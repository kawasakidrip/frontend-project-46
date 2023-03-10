import { objectStingify } from '../tools';

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
      let acc = '';
      if (status === 'nested') {
        acc = `${indent}${labels.nested}${key}: ${iter(value, depth + 1)}`;
      } if (status === 'deleted') {
        acc = makeDiffString(indent, 'deleted', key, value, depth);
      } if (status === 'added') {
        acc = makeDiffString(indent, 'added', key, value, depth);
      } if (status === 'changed') {
        acc = `${makeDiffString(indent, 'deleted', key, value.oldValue, depth)}\n${makeDiffString(indent, 'added', key, value.newValue, depth)}`;
      } if (status === 'unchanged') {
        acc = makeDiffString(indent, 'unchanged', key, value, depth);
      }
      return acc;
    });
    const result = ['{', ...lines, `${bracketIndent}}`].join('\n');
    return result;
  };
  return iter(tree, 1);
};

export default stylish;
