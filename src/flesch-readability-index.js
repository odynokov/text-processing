import getSyllableCount from 'syllable';
import getWordCount from 'word-count';
import getSentenceCount from './sentence-count';

export default text => {
  const sentences = getSentenceCount(text);
  const words = getWordCount(text);
  const syllables = getSyllableCount(text);

  const result = (206.835 - 1.015 * words / sentences - 84.6 * syllables / words).toFixed(2) / 1;

  return isFinite(result) ? result : 0;
};
