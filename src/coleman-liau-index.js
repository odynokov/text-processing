import getWordCount from 'word-count';
import getCharacterCount from './character-count';
import getSentenceCount from './sentence-count';

export default text => {
  const sentences = getSentenceCount(text);
  const words = getWordCount(text);
  const letters = getCharacterCount(text);

  const result = (0.0588 * letters / words * 100 - 0.296 * sentences / words * 100 - 15.8).toFixed(2) / 1;

  return isFinite(result) ? result : 0;
};
