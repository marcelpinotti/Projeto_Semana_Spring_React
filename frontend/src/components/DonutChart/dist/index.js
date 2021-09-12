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
var axios_1 = require("axios");
var react_apexcharts_1 = require("react-apexcharts");
var react_1 = require("react");
var react_2 = require("react");
var requests_1 = require("utils/requests");
var DonutChart = function () {
    var _a = react_1.useState({ labels: [], series: [] }), chartData = _a[0], setChartData = _a[1];
    react_2.useEffect(function () {
        //requisição back-end
        axios_1["default"].get(requests_1.BASE_URL + "/sales/amount-by-seller")
            .then(function (response) {
            var data = response.data;
            var myLabels = data.map(function (x) { return x.sellerName; });
            var mySeries = data.map(function (x) { return x.sum; });
            setChartData({ labels: myLabels, series: mySeries });
        });
    }, []);
    var options = {
        legend: {
            show: true
        }
    };
    return (React.createElement(react_apexcharts_1["default"], { options: __assign(__assign({}, options), { labels: chartData.labels }), series: chartData.series, type: "donut", height: "240" }));
};
exports["default"] = DonutChart;
