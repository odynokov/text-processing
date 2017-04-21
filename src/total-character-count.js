export default text => (/[^\n]/g.test(text)
  ? text.match(/[^\n]/g).length
  : 0);
