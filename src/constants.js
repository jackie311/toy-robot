const TABLE_SIZE = 5;

const INVALID_COMMANDS = 'Please use a valid command like place, move, left, right or report';
const INVALID_INPUT_DIRECTION = 'Please provide valid direction from north, east, south, west';
const INVALID_INPUT_COORDINATES = `Please provide valid position(table size is ${TABLE_SIZE}x${TABLE_SIZE}). e.g place 0, 0, north`;

const PLACE_ROBOT = `Please put robot on the table(table size is ${TABLE_SIZE}x${TABLE_SIZE}). e.g place 0, 0, north`;

const validDireactions = ['north', 'east', 'south', 'west'];
const validCommands = ['place', 'move', 'left', 'right', 'report'];

const directionX = {
  north: 0,
  east: 1,
  south: 0,
  west: -1
};
const directionY = {
  north: 1,
  east: 0,
  south: -1,
  west: 0
};

module.exports = {
  directionX,
  directionY,
  TABLE_SIZE,
  PLACE_ROBOT,
  validCommands,
  INVALID_COMMANDS,
  validDireactions,
  INVALID_INPUT_DIRECTION,
  INVALID_INPUT_COORDINATES,
}
