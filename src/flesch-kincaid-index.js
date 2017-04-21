import getWordCount from 'word-count';
import getSentenceCount from './sentence-count';
import getSyllableCount from 'syllable';

export default text => {
  const sentences = getSentenceCount(text);
  const words = getWordCount(text);
  const syllables = getSyllableCount(text);

  const result = ((0.39 * words / sentences) + (11.8 * syllables / words) - 15.59).toFixed(2) / 1;

  return isFinite(result) ? result : 0;
};
