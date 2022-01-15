const right = require('../actions/right');

describe('test RIGHT command', () => {
  test('ignore action if robot is not placed', () => {
    expect(right({ isPlaced: null })).toEqual({})
  });

  test('turn Right from North', () => {
    const input = {
      isPlaced: true,
      xAxis: 0,
      yAxis: 0,
      currentFacing: 'north'
    }
    expect(right(input)).toEqual({
      xAxis: 0,
      yAxis: 0,
      isPlaced: true,
      status: 'turn right',
      currentFacing: 'east',
    })
  });

  test('turn Right from east', () => {
    const input = {
      isPlaced: true,
      xAxis: 2,
      yAxis: 0,
      currentFacing: 'east'
    }
    expect(right(input)).toEqual({
      xAxis: 2,
      yAxis: 0,
      isPlaced: true,
      status: 'turn right',
      currentFacing: 'south',
    })
  });
})