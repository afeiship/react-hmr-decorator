var hot = require("react-hot-loader").hot;

module.exports = function (inModule) {
  return function (inClass) {
    return hot(inModule)(inClass);
  };
};
