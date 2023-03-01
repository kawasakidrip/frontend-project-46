import _ from 'lodash';
import getParse from './parse.js';

const genDiff = (file1, file2) => {
  const data1 = getParse(file1);
  const data2 = getParse(file2);

  const property1 = Object.keys(data1);
  const property2 = Object.keys(data2);

  const compare = _.union(property1, property2);
  const sortCompare = compare.sort();

  const result = sortCompare.reduce((acc, value) => {
    let action = acc;
    if (!Object.hasOwn(data2, value)) {
      action += `  - ${value}: ${data1[value]}\n`;
    } else if (!Object.hasOwn(data1, value)) {
      action += `  + ${value}: ${data2[value]}\n`;
    } else if (data1[value] !== data2[value]) {
      action += `  - ${value}: ${data1[value]}\n`;
      action += `  + ${value}: ${data2[value]}\n`;
    } else {
      action += `    ${value}: ${data1[value]}\n`;
    }
    return action;
  }, '');
  console.log(`{\n${result}}`);
  return `{\n${result}}`;
};

export default genDiff;
