const place = require('../actions/place');

describe('test PLACE command', () => {
  test('missing x and y coordinates', () => {
    const userInput = 'place';
    expect(place({ userInput })).toEqual({});
  });

  test('missing  y coordinates', () => {
    const userInput = 'place 0';
    expect(place({ userInput })).toEqual({});
  });

  test('missing direction', () => {
    const userInput = 'place 0,0';
    expect(place({ userInput })).toEqual({});
  });

  test('invalid direction', () => {
    const userInput = 'place 0, 0, nor';
    expect(place({ userInput })).toEqual({});
  });

  test('incldue space between argements', () => {
    const userInput = 'place 0, 0,     east';
    expect(place({ userInput }))
      .toEqual({
        isPlaced: true,
        status: 'place',
        xAxis: 0,
        yAxis: 0,
        currentFacing: 'east',
      });
  });

  test('Upper case', () => {
    const userInput = 'PLACE 0, 1,  North';
    expect(place({ userInput }))
      .toEqual({
        isPlaced: true,
        status: 'place',
        xAxis: 0,
        yAxis: 1,
        currentFacing: 'north',
      });
  });

  test('place robot out of table', () => {
    const userInput = 'place 5, 5, east';
    expect(place({ userInput })).toEqual({})
  });
});
