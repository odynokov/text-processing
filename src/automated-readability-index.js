import getWordCount from 'word-count';
import getCharacterCount from './character-count';
import getSentenceCount from './sentence-count';

export default text => {
  const sentences = getSentenceCount(text);
  const words = getWordCount(text);
  const characters = getCharacterCount(text);

  const result = (4.71 * characters / words + 0.5 * words / sentences - 21.43).toFixed(2) / 1;

  return isFinite(result) ? result : 0;
};
