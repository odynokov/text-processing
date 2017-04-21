import getSyllableCount from 'syllable';

const word_regex = /\b(\w+)\b/g;

const common_endings = ['ing', 'er'];

const excludeCommon = word => !common_endings.some(ending => word.endsWith(ending));

export default (min_syllables_count, text) =>
  text
    .split(word_regex)
    .filter(word => getSyllableCount(word) >= min_syllables_count)
    .filter(excludeCommon)
    .length;
