"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var format_1 = require("utils/format");
var requests_1 = require("utils/requests");
var DataTable = function () {
    var _a;
    var _b = react_1.useState({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    }), page = _b[0], setPage = _b[1];
    react_1.useEffect(function () {
        axios_1["default"].get(requests_1.BASE_URL + "/sales?page=0&size=10&sort=date,desc")
            .then(function (response) {
            setPage(response.data);
        });
    }, []);
    return (React.createElement("div", { className: "table-responsive" },
        React.createElement("table", { className: "table table-striped table-sm" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Data"),
                    React.createElement("th", null, "Vendedor"),
                    React.createElement("th", null, "Clientes visitados"),
                    React.createElement("th", null, "Neg\u00F3cios fechados"),
                    React.createElement("th", null, "Valor"))),
            React.createElement("tbody", null, (_a = page.content) === null || _a === void 0 ? void 0 : _a.map(function (x) { return (React.createElement("tr", { key: x.id },
                React.createElement("td", null, format_1.formatLocalDate(x.date, "dd/MM/yyyy")),
                React.createElement("td", null, x.seller.name),
                React.createElement("td", null, x.visited),
                React.createElement("td", null, x.deals),
                React.createElement("td", null, x.amount.toFixed(2)))); })))));
};
exports["default"] = DataTable;
