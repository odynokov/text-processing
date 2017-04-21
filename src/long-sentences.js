import getSentences from './sentences';
import getWordCount from './word-count';

// http://www.wyliecomm.com/2010/01/snip-your-sentences/
const MIN_WORD_COUNT = 17;

export default text => getSentences(text).filter(sentence => getWordCount(sentence) > MIN_WORD_COUNT);
