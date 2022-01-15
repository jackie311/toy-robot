const { PLACE_ROBOT, validDireactions } = require('../constants');

module.exports =
  ({ xAxis, yAxis, currentFacing, isPlaced }) => {
    if (!isPlaced) {
      console.info(PLACE_ROBOT);
      return {};
    }

    const index = validDireactions.findIndex((dir) => dir === currentFacing);
    const newIndex = (index + 3) % validDireactions.length;
    console.info(
      `Current Position: ${xAxis}, ${yAxis}, ${validDireactions[
        newIndex
      ].toUpperCase()}`
    );

    return {
      xAxis,
      yAxis,
      isPlaced: true,
      status: 'turn left',
      currentFacing: validDireactions[newIndex],
    };
  }