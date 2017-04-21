export default text => (/[a-z0-9]/ig.test(text)
  ? text.match(/[a-z0-9]/ig).length
  : 0);
