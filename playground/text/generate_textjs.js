const fs = require('fs');
const map = Array.prototype.map;

const FILE_DIR = 'playground/text/';
const fileVarNameMap = {
  'en.txt': 'TEXT_EN',
  'zhs.txt': 'TEXT_ZHS',
  'zht.txt': 'TEXT_ZHT',
  'ja.txt': 'TEXT_JA'
};

const OUTPUT_PATH = 'playground/text.js';

let textVariables = new Map();

for (let fileVar in fileVarNameMap) {
  let text = fs.readFileSync(FILE_DIR + fileVar, 'utf-8');
  let variableName = fileVarNameMap[fileVar];
  textVariables[variableName] = text;
}

console.log(textVariables);

outputJs = ['// This file is generated from `text/*` text files using `generated_textjs.js`'];

for (let key in textVariables) {
  let value = textVariables[key];
  value = value.replace(/`/g, '\\\`');
  console.log(key);
  outputJs.push(`${key} = \n \`${value}\`;`);
}

let sampleVariables = [];
for (let key in fileVarNameMap) {
  let mapKey = key.substring(0, key.length - 4);
  sampleVariables.push(`${mapKey} : ${fileVarNameMap[key]}`);
}

outputJs.push(
  `SAMPLES = { ${sampleVariables.join(',\n')} }`
);

console.log(outputJs);

console.log('Writing to `text.js`...');
fs.writeFileSync(OUTPUT_PATH, outputJs.join('\n'));
