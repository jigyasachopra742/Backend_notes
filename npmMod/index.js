const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue.underline.inverse("hello world"));

const res = validator.isEmail("thapa@thapa.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));