#!/usr/bin/env node
const chalk = require('chalk');
const toc = require('markdown-toc');
const fs = require('fs');

const strip = (text)=> (text.trim());
const read = (file)=> (strip(fs.readFileSync(file, 'utf8')));
const replaceContents = (file, replacement)=> {
  fs.writeFile(file, replacement, err => {
    console.log(chalk.green('Successfully updated the table of contents'));
  });
};
const doc = read('./README.md');
const newDoc = toc.insert(doc, {bullets: '-'});

replaceContents('./README.md', newDoc);
