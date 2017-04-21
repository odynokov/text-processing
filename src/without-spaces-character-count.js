export default text => (/[^\s\n]/g.test(text)
  ? text.match(/[^\s\n]/g).length
  : 0);
