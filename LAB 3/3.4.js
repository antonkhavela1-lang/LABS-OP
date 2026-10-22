const introspect = (iface) => {
  const result = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
};

console.log('introspect:', introspect({
  m1: x => [x],
  m2: function (x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; }
}));

module.exports = { introspect };