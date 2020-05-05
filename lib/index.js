const u = void 0;

exports.isUndefined = (value) => {
  return value === u && typeof value === 'undefined';
}

exports.isObject = (value) => {
  return Object.prototype.toString.call(value) === '[object Object]';
}

exports.isString = (value) => {
  return Object.prototype.toString.call(value) === '[object String]';
}

exports.isArray = (value) => {
  return Object.prototype.toString.call(value) === '[object Array]';
}

exports.isNumber = (value) => {
  return Object.prototype.toString.call(value) === '[object Number]';
}