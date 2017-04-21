export default text => (/[a-z\d]+\b/gi.test(text)
  ? text.match(/[a-z\d]+\b/gi).length
  : 0);
