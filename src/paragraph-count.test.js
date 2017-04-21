import getParagraphCount from './paragraph-count';

describe('Count paragraphs', () => {

  test('Empty text', () => {
    expect(getParagraphCount('')).toEqual(0);
  });

  test('Empty text', () => {
    expect(getParagraphCount(' ')).toEqual(0);
  });

});
