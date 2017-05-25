var db = module.exports = require('./iso4217.json');

module.exports.utils = {
  getByCode: function (code) {
    var matches = Object.values(db).filter(item => item.Code === leftpad(3, code));
    return matches.length ? matches[0] : null;
  }
};

function leftpad (width, str, char = '0') {
  const str_ = str.toString();
  const padLen = width - str_.length;
  return char.repeat(padLen > 0 ? padLen : 0) + str_;
}
