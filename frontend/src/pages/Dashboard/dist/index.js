"use strict";
exports.__esModule = true;
var BarChart_1 = require("components/BarChart");
var DonutChart_1 = require("components/DonutChart");
var DataTable_1 = require("components/DataTable");
var Footer_1 = require("components/Footer");
var NavBar_1 = require("components/NavBar");
var Dashboard = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavBar_1["default"], null),
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "text-primary  py-3" }, "Dashboard de Vendas"),
            React.createElement("div", { className: "row px-3" },
                React.createElement("div", { className: "col-sm-6" },
                    React.createElement("h5", { className: "text-center text-secondary" }, "Taxa de Sucesso (%)"),
                    React.createElement(BarChart_1["default"], null)),
                React.createElement("div", { className: "col-sm-6" },
                    React.createElement("h5", { className: "text-center text-secondary" }, "Total de Vendas"),
                    React.createElement(DonutChart_1["default"], null))),
            React.createElement("div", { className: "py-3" },
                React.createElement("h2", { className: "text-primary" }, " Todas Vendas")),
            React.createElement(DataTable_1["default"], null)),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Dashboard;
