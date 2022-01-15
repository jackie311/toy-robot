const { PLACE_ROBOT } = require('../constants');

module.exports = ({ xAxis, yAxis, currentFacing, isPlaced }) => {
  if (!isPlaced) {
    console.info(PLACE_ROBOT);
    return {};
  }

  console.info(
    `Final Position: ${xAxis}, ${yAxis}, ${currentFacing.toUpperCase()}`
  );
  return { status: 'finished' };
}