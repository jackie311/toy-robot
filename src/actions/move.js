const {
  directionX,
  directionY,
  PLACE_ROBOT,
} = require('../constants');
const { isValidNumber } = require('../helper');

module.exports =
  ({ xAxis, yAxis, currentFacing, isPlaced }) => {
    //if robot is not placed on the table, ignore action
    if (!isPlaced) {
      console.info(PLACE_ROBOT);
      return {};
    }

    const x = xAxis + directionX[currentFacing];
    const y = yAxis + directionY[currentFacing];

    //if robot fall off the table, then keep current position
    xAxis = isValidNumber(x) ? x : xAxis;
    yAxis = isValidNumber(y) ? y : yAxis;

    console.info(
      `Current Position: ${xAxis}, ${yAxis}, ${currentFacing.toUpperCase()}`
    );

    return {
      xAxis,
      yAxis,
      currentFacing,
      isPlaced: true,
      status: 'move',
    };
  }