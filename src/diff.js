import getParse from './parse.js';
import { getTree } from './tools.js';
import checkFormat from './formatters/index.js';

const genDiff = (filename1, filename2, format = 'stylish') => {
  const data1 = getParse(filename1);
  const data2 = getParse(filename2);
  const tree = getTree(data1, data2);
  return checkFormat(tree, format);
};

export default genDiff;
