const { TABLE_SIZE } = require('./constants');

function isValidNumber(coordinates) {
  if (coordinates === undefined) return false;

  if (
    parseInt(coordinates, 10) >= 0 &&
    parseInt(coordinates, 10) < TABLE_SIZE
  ) return true;

  return false;
}

module.exports = {
  isValidNumber,
}