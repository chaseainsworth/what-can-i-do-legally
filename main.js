const whatCanIDoLegally = require('./back-end.js');

const age = getInput(0);

const message = whatCanIDoLegally(age);

console.log(message);

function getInput(i) {
  return process.argv[i + 2];
}
