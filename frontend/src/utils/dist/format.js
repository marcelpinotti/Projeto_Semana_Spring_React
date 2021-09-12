"use strict";
exports.__esModule = true;
exports.formatLocalDate = exports.round = void 0;
var date_fns_1 = require("date-fns");
exports.round = function (value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};
exports.formatLocalDate = function (date, pattern) {
    var dt = new Date(date);
    var dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return date_fns_1.format(dtDateOnly, pattern);
};
