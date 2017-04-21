export default text => {
  // const sentence_regex = /\. |\? |! /g;
  const sentence_regex = /[.|!|?]\s/gi;

  return sentence_regex.test(text)
    ? text.split(sentence_regex).filter(item => item.length > 0)
    : [];
};
