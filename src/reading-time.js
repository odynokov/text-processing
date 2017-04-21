import getWordCount from 'word-count';

// average reading speed (words per minute)
const ARS_WMP = 230;

export default text => Math.ceil(getWordCount(text) / ARS_WMP);
