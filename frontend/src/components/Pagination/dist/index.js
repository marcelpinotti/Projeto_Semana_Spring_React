"use strict";
exports.__esModule = true;
var Pagination = function (_a) {
    var page = _a.page, onPageChange = _a.onPageChange;
    return (React.createElement("div", { className: "row d-flex justify-content-center" },
        React.createElement("nav", null,
            React.createElement("ul", { className: "pagination" },
                React.createElement("li", { className: "page-item " + (page.first ? 'disabled' : '') + " " },
                    React.createElement("button", { className: "page-link", onClick: function () { return onPageChange(page.number - 1); } }, "Anterior")),
                React.createElement("li", { className: "page-item disabled" },
                    React.createElement("span", { className: "page-link" }, page.number + 1)),
                React.createElement("li", { className: "page-item " + (page.last ? 'disabled' : '') + " " },
                    React.createElement("button", { className: "page-link", onClick: function () { return onPageChange(page.number + 1); } }, "Pr\u00F3xima"))))));
};
exports["default"] = Pagination;
