export default text => {

  const count = text.replace(/[^\w\s]/g, '').split(/\s+/).reduce((map, word) => {
    map[word] = (map[word] || 0) + 1;
    return map;
  }, Object.create(null));

  return Object.keys(count).reduce((res, key) => res.concat(`${key} (${count[key]})`), []);
};
