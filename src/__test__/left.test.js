const left = require('../actions/left');

describe('test LEFT command', () => {
  test('ignore action if robot is not placed', () => {
    expect(left({ isPlaced: null })).toEqual({})
  });

  test('turn Left from North', () => {
    const input = {
      isPlaced: true,
      xAxis: 0,
      yAxis: 0,
      currentFacing: 'north'
    }
    expect(left(input)).toEqual({
      xAxis: 0,
      yAxis: 0,
      isPlaced: true,
      status: 'turn left',
      currentFacing: 'west',
    })
  });

  test('turn Left from east', () => {
    const input = {
      isPlaced: true,
      xAxis: 2,
      yAxis: 0,
      currentFacing: 'east'
    }
    expect(left(input)).toEqual({
      xAxis: 2,
      yAxis: 0,
      isPlaced: true,
      status: 'turn left',
      currentFacing: 'north',
    })
  });
})