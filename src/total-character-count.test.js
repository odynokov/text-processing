import getTotalCharacterCount from './total-character-count';

describe('Count total characters', () => {

  test('Empty text trimmed', () => {
    expect(getTotalCharacterCount('')).toEqual(0);
  });

  test('Empty text untrimmed', () => {
    expect(getTotalCharacterCount(' ')).toEqual(1);
  });

  test('Not empty text', () => {
    expect(getTotalCharacterCount('This is a book. The book is red. The red book is on the table...')).toEqual(64);
  });

});
