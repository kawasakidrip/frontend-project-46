import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getAbsolutePath = (filename) => path.resolve(process.cwd(), filename);

const getFileExtension = (filename) => path.extname(filename);

const getData = (filePath, extension) => {
  const absolutePath = getAbsolutePath(filePath);
  if (extension === '.json') {
    return JSON.parse(fs.readFileSync(absolutePath));
  }
  return yaml.load(fs.readFileSync(absolutePath));
};

const getJSONFromFile = (filePath) => getData(filePath);

const getYamlFromFile = (filePath) => getData(filePath);

const getParse = (filename) => {
  const extension = getFileExtension(filename);
  if (extension === '.yaml' || extension === '.yml') {
    return getYamlFromFile(filename);
  }
  return getJSONFromFile(filename);
};

export default getParse;
