import getWithoutSpacesCharacterCount from './without-spaces-character-count';

describe('Count total characters without spaces', () => {

  test('Empty text trimmed', () => {
    expect(getWithoutSpacesCharacterCount('')).toEqual(0);
  });

  test('Empty text untrimmed', () => {
    expect(getWithoutSpacesCharacterCount(' ')).toEqual(0);
  });

});
