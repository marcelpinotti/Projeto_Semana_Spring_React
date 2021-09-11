"use strict";
exports.__esModule = true;
var ds_dark_svg_1 = require("assets/img/ds-dark.svg");
var react_router_dom_1 = require("react-router-dom");
var NavBar = function () {
    return (React.createElement("div", { className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm" },
        React.createElement("div", { className: "container" },
            React.createElement("nav", { className: "my-2 my-md-0 mr-md-3" },
                React.createElement(react_router_dom_1.Link, { to: "/" },
                    React.createElement("img", { src: ds_dark_svg_1["default"], alt: "DevSuperior", width: "120" }))))));
};
exports["default"] = NavBar;
