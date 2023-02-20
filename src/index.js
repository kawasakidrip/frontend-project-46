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
    const sortCompare = compare.sort()

    const result = sortCompare.reduce((acc, value) => {
        if (!Object.hasOwn(fString2, value)) {
            acc += `  - ${value}: "${fString1[value]}"\n`;
          } else if (!Object.hasOwn(fString1, value)) {
            acc += `  + ${value}: "${fString2[value]}"\n`;
          } else if (fString1[value] !== fString2[value]) {
            acc += `  - ${value}: "${fString1[value]}"\n`;
            acc += `  + ${value}: "${fString2[value]}"\n`;
          } else {
            acc += `    ${value}: "${fString1[value]}"\n`;
          }
          return acc;
    }, '');
    console.log(`{\n${result}}`);
};
export { 
    genDiff, getAbsolutePath
};