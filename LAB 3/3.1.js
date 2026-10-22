const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }
  return key;
};

const ipToNumber = (ip = '127.0.0.1') => {
  return ip.split('.').reduce((acc, octet, index) => {
    return acc + (parseInt(octet, 10) << ((3 - index) * 8));
  }, 0);
};

const introspect = (iface) => {
  const result = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
};

console.log(random(1, 10));
console.log(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(ipToNumber('127.0.0.1'));
console.log(introspect({
  m1: x => [x],
  m2: function (x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; }
}));