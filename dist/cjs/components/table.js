"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unsafe-return */
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var uuid_1 = require("uuid");
var is_empty_1 = require("./is-empty");
var loading_1 = require("./loading");
var Th = styled_components_1.default.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: ", ";\n    width: ", ";\n"], ["\n    cursor: ", ";\n    width: ", ";\n"])), function (_a) {
    var sortable = _a.sortable;
    return typeof sortable === 'boolean' ? 'pointer' : 'default';
}, function (_a) {
    var width = _a.width;
    return typeof width === 'number' ? "".concat(width, "px") : '85px';
});
var Main = function (_a) {
    var showRowNumber = _a.showRowNumber, columnNumberTitle = _a.columnNumberTitle, columns = _a.columns, rows = _a.rows, empty = _a.empty, _b = _a.emptyMessage, emptyMessage = _b === void 0 ? 'no data' : _b, loading = _a.loading;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(loading_1.Loading, {}), (0, jsx_runtime_1.jsxs)("table", __assign({ style: { width: '100%' } }, { children: [empty && !loading && (0, jsx_runtime_1.jsx)(is_empty_1.IsEmpty, { message: emptyMessage }), !empty && !loading && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("thead", __assign({ className: 'thead' }, { children: (0, jsx_runtime_1.jsxs)("tr", { children: [showRowNumber && ((0, jsx_runtime_1.jsx)("th", __assign({ style: { width: 25 } }, { children: columnNumberTitle }))), columns === null || columns === void 0 ? void 0 : columns.map(function (column) { return ((0, jsx_runtime_1.jsx)(Th, __assign({ title: column.description, sortable: column.sortable, width: column.width }, { children: column.headerName }), (0, uuid_1.v4)())); })] }) })), (0, jsx_runtime_1.jsx)("tbody", __assign({ className: 'tbody' }, { children: rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [showRowNumber && ((0, jsx_runtime_1.jsx)("td", { children: rows.indexOf(row) + 1 })), columns === null || columns === void 0 ? void 0 : columns.map(function (c) { return ((0, jsx_runtime_1.jsx)("td", { children: row[c.field] }, (0, uuid_1.v4)())); })] }, (0, uuid_1.v4)())); }) }))] }))] }))] }));
};
exports.Main = Main;
exports.Table = (0, react_1.memo)(exports.Main);
var templateObject_1;