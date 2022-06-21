import bubbleSort from '../src/index';

describe('Array sort...', () => {
  it('bubbleSort algorithm', () => {
    expect(bubbleSort([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
