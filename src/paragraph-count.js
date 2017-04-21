export default text => {
  const regex = /\n/g;

  return regex.test(text)
    ? text.split(regex).filter(item => item.trim()).length
    : 0;
};
