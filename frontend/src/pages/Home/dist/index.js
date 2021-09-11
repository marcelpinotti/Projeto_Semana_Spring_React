"use strict";
exports.__esModule = true;
var Footer_1 = require("components/Footer");
var NavBar_1 = require("components/NavBar");
var react_router_dom_1 = require("react-router-dom");
var Home = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavBar_1["default"], null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "jumbotron" },
                React.createElement("h1", { className: "display-4" }, "DSVendas"),
                React.createElement("p", { className: "lead" }, "Analise o desempenho das suas vendas por diferentes perspectivas"),
                React.createElement("hr", null),
                React.createElement("p", null, "Esta aplica\u00E7\u00E3o consiste em exibir um dashboard a partir de dados fornecidos por um back end constru\u00EDdo com Spring Boot."),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary btn-lg", to: "/dashboard" }, "Acessar dashboard"))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Home;
