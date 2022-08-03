'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');

const data = {
  name: chalk.white('           Karan Pratap Singh'),
  work: chalk.white('Senior Software Engineer'),
  twitter: `${chalk.gray('https://twitter.com/')}${chalk.cyan('karan_6864')}`,
  github: `${chalk.gray('https://github.com/')}${chalk.green('karanpratapsingh')}`,
  linkedin: `${chalk.gray('https://linkedin.com/in/')}${chalk.blue('karan99')}`,
  web: chalk.cyan('https://karanpratapsingh.com'),
  npx: `${chalk.red('npx')} ${chalk.white('karanpratapsingh')}`,
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:'),
};

const newline = '\n';
const heading = `${data.name}`;
const work = `${data.labelWork}  ${data.work}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const web = `${data.labelWeb}  ${data.web}`;
const card = `${data.labelCard}  ${data.npx}`;

const output = `${heading}\n\n${work}\n${web}\n${github}\n${twitter}\n${linkedin}\n\n${card}`

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
);
