"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_apexcharts_1 = require("react-apexcharts");
var DonutChart = function () {
    var mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    };
    var options = {
        legend: {
            show: true
        }
    };
    return (React.createElement(react_apexcharts_1["default"], { options: __assign(__assign({}, options), { labels: mockData.labels }), series: mockData.series, type: "donut", height: "240" }));
};
exports["default"] = DonutChart;
