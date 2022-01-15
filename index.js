const { createInterface } = require('readline');

const move = require('./src/actions/move');
const left = require('./src/actions/left');
const place = require('./src/actions/place');
const right = require('./src/actions/right');
const report = require('./src/actions/report');
const { validCommands, INVALID_COMMANDS } = require('./src/constants');

let xAxis = null;
let yAxis = null;
let status = null;
let isPlaced = null;
let currentFacing = null;

const actionsMapping = {
  move: (input) => move(input),
  left: (input) => left(input),
  right: (input) => right(input),
  place: (input) => place(input),
  report: (input) => report(input)
}

function handleInput(userInput) {
  const command = userInput.split(' ')[0].toLowerCase();

  if (!validCommands.includes(command)) {
    return console.info(INVALID_COMMANDS);
  }

  const input = ({
    xAxis,
    yAxis,
    isPlaced,
    userInput,
    currentFacing
  })
  const result = actionsMapping[command](input);

  xAxis = result.xAxis;
  yAxis = result.yAxis;
  status = result.status;
  isPlaced = result.isPlaced;
  currentFacing = result.currentFacing;

  return status;
};

function prompt(rl) {
  rl.question('>> ', (input) => {
    const status = handleInput(input);
    if (status === 'finished') {
      rl.close();
      return process.exit(0);
    }
    // recursively excute until user input "REPORT"
    return prompt(rl);
  });
};

function start() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.setPrompt('>> ');
  prompt(rl);
}

start();
