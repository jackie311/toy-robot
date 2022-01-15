const move = require('../actions/move');

describe('test MOVE command', () => {
  test('prevent moving if robot is not placed', () => {
    expect(move({ isPlaced: null })).toEqual({})
  });

  test('move forward one unit to north', () => {
    const input = {
      isPlaced: true,
      xAxis: 0,
      yAxis: 0,
      currentFacing: 'north'
    }
    expect(move(input)).toEqual({
      xAxis: 0,
      yAxis: 1,
      currentFacing: 'north',
      isPlaced: true,
      status: 'move',
    });
  });

  test('move forward one unit to east', () => {
    const input = {
      isPlaced: true,
      xAxis: 0,
      yAxis: 0,
      currentFacing: 'east'
    }
    expect(move(input)).toEqual({
      xAxis: 1,
      yAxis: 0,
      currentFacing: 'east',
      isPlaced: true,
      status: 'move',
    });
  });

  test('prevent robot moving if it fall off the table ', () => {
    const input = {
      isPlaced: true,
      xAxis: 0,
      yAxis: 0,
      currentFacing: 'west'
    }
    expect(move(input)).toEqual({
      xAxis: 0,
      yAxis: 0,
      currentFacing: 'west',
      isPlaced: true,
      status: 'move',
    });
  });
});

