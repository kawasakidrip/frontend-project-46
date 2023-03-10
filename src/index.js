import getParse from './parse.js';
import { getTree } from './tools.js';
import stylish from './formatters/stylish.js';

const genDiff = (file1, file2) => {
  const data1 = getParse(file1);
  const data2 = getParse(file2);

  const tree = getTree(data1, data2);

  return stylish(tree);
};

export default genDiff;
