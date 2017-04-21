import getSentenceCount from './sentence-count';

describe('Count sentences', () => {

  test('Empty text', () => {
    expect(getSentenceCount('')).toEqual(0);
  });

  test('Empty text', () => {
    expect(getSentenceCount(' ')).toEqual(0);
  });

});
