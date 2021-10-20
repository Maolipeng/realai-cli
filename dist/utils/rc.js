const {
  RC
} = require('./constants');

const {
  decode,
  encode
} = require('ini');

const {
  promisify
} = require('util');

const chalk = require('chalk');

const fs = require('fs');

const exits = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const get = async key => {
  const exit = await exits(RC);
  let opts;

  if (exit) {
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);
    return opts[key];
  }

  return '';
};

const getAll = async () => {
  const exit = await exits(RC);
  let opts;

  if (exit) {
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);
    return opts;
  }

  return {};
};

const set = async (key, value) => {
  const exit = await exits(RC);
  let opts;

  if (exit) {
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);

    if (!key) {
      console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
      return;
    }

    if (!value) {
      console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is required'));
      return;
    }

    Object.assign(opts, {
      [key]: value
    });
  } else {
    opts = {
      [key]: value
    };
  }

  await writeFile(RC, encode(opts), 'utf8');
};

const remove = async key => {
  const exit = await exits(RC);
  let opts;

  if (exit) {
    opts = await readFile(RC, 'utf8');
    opts = decode(opts);
    delete opts[key];
    await writeFile(RC, encode(opts), 'utf8');
  }
};

module.exports = {
  get,
  getAll,
  set,
  remove
};