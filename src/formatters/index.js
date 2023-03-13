import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';

const checkFormat = (diff, format) => {
  if (format === 'stylish') return stylish(diff);
  if (format === 'plain') return plain(diff);
  if (format === 'json') return json(diff);
  return new Error('Unknown format!');
};

export default checkFormat;
