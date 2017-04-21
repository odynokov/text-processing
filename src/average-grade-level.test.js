import getAverageGradeLevel from './average-grade-level';

describe('Average grade level', () => {

  test('Empty text', () => {
    expect(getAverageGradeLevel('')).toEqual(0);
  });

<<<<<<< HEAD
=======
  test('Empty text', () => {
    expect(getAverageGradeLevel(' ')).toEqual(0);
  });

>>>>>>> 7bf7b1c80c56e74b2880d2e95bdc6b7b537fa039
});
