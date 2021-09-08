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
var BarChart = function () {
    var options = {
        plotOptions: {
            bar: {
                horizontal: true
            }
        }
    };
    var mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };
    return (React.createElement(react_apexcharts_1["default"], { options: __assign(__assign({}, options), { xaxis: mockData.labels }), series: mockData.series, type: "bar", height: "240" }));
};
exports["default"] = BarChart;
