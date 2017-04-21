import getWordCount from './word-count';

describe('Count words', () => {

  test('Empty text trimmed', () => {
    expect(getWordCount('')).toEqual(0);
  });

  test('Empty text untrimmed', () => {
    expect(getWordCount(' ')).toEqual(0);
  });

  test('Not empty text', () => {
    expect(getWordCount('This is a book. The book is red.\nThe red book is on the table...')).toEqual(15);
  });

});
