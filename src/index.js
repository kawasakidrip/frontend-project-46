import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getAbsolutePath = (file) => path.resolve(file);

const genDiff = (file1, file2) => {
  const filePath1 = getAbsolutePath(file1);
  const filePath2 = getAbsolutePath(file2);

  const fString1 = JSON.parse(fs.readFileSync(filePath1));
  const fString2 = JSON.parse(fs.readFileSync(filePath2));

  const property1 = Object.keys(fString1);
  const property2 = Object.keys(fString2);

  const compare = _.union(property1, property2);
  const sortCompare = compare.sort();

  const result = sortCompare.reduce((acc, value) => {
    let action = acc;
    if (!Object.hasOwn(fString2, value)) {
      action += `    - ${value}: ${fString1[value]}\n`;
    } else if (!Object.hasOwn(fString1, value)) {
      action += `    + ${value}: ${fString2[value]}\n`;
    } else if (fString1[value] !== fString2[value]) {
      action += `    - ${value}: ${fString1[value]}\n`;
      action += `    + ${value}: ${fString2[value]}\n`;
    } else {
      action += `      ${value}: ${fString1[value]}\n`;
    }
    return action;
  }, '');
  console.log(`{\n${result}  }`);
  return `{\n${result}  }`;
};
export default genDiff;
