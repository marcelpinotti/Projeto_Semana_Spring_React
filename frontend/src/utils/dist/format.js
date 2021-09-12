"use strict";
exports.__esModule = true;
exports.round = void 0;
exports.round = function (value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};
