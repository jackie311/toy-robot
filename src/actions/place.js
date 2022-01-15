const {
  validDireactions,
  INVALID_INPUT_DIRECTION,
  INVALID_INPUT_COORDINATES,
} = require('../constants');
const { isValidNumber } = require('../helper');

module.exports =
  ({ userInput }) => {
    const [command] = userInput.split(' ');
    //extract arguments from input
    const [xAxis = '', yAxis = '', direction = ''] = userInput
      .replace(command, '')
      .toLowerCase()
      .split(',');

    if (!isValidNumber(xAxis.trim()) || !isValidNumber(yAxis.trim())) {
      console.info(INVALID_INPUT_COORDINATES);
      return {};
    }

    if (!validDireactions.includes(direction.trim())) {
      console.info(INVALID_INPUT_DIRECTION);
      return {};
    }
    console.info(
      `Current Position: ${xAxis.trim()}, ${yAxis.trim()}, ${direction
        .trim()
        .toUpperCase()}`
    );
    return {
      isPlaced: true,
      status: 'place',
      xAxis: parseInt(xAxis.trim(), 10),
      yAxis: parseInt(yAxis.trim(), 10),
      currentFacing: direction.trim(),
    };
  }