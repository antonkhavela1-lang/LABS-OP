const ipToNumber = (ip = '127.0.0.1') => {
  return ip.split('.').reduce((acc, octet, index) => {
    return acc + (parseInt(octet, 10) << ((3 - index) * 8));
  }, 0);
};

console.log('ipToNumber:', ipToNumber('127.0.0.1'));

module.exports = { ipToNumber };