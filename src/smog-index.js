import getSentenceCount from './sentence-count';
import getPolysyllables from './polysyllables';

export default text => {
  const sentences = getSentenceCount(text);
  const polysyllables = getPolysyllables(3, text);

  const result = (1.0430 * Math.sqrt(polysyllables * 30 / sentences) + 3.1291).toFixed(2) / 1;

  return isFinite(result) ? result : 0;
};
