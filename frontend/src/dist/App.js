"use strict";
exports.__esModule = true;
var DataTable_1 = require("./components/DataTable");
var Footer_1 = require("./components/Footer");
var NavBar_1 = require("./components/NavBar");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavBar_1["default"], null),
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "text-primary" }, "Ol\u00E1 Mundo!"),
            React.createElement(DataTable_1["default"], null)),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = App;
