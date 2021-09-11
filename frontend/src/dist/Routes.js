"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("pages/Home");
var Dashboard_1 = require("pages/Dashboard");
var Routes = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: "/", exact: true },
                React.createElement(Home_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: "/dashboard" },
                React.createElement(Dashboard_1["default"], null)))));
};
exports["default"] = Routes;
