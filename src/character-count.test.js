import getCharacterCount from './character-count';

describe('Count characters', () => {

  test('Empty text trimmmed', () => {
    expect(getCharacterCount('')).toEqual(0);
  });

  test('Empty text untrimmed', () => {
    expect(getCharacterCount(' ')).toEqual(0);
  });

});
