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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unsafe-return */
var react_1 = require("react");
var uuid_1 = require("uuid");
var icons_1 = require("./icons");
var is_empty_1 = require("./is-empty");
var loading_1 = require("./loading");
var Main = function (_a) {
    var showRowNumber = _a.showRowNumber, columnNumberTitle = _a.columnNumberTitle, columns = _a.columns, rows = _a.rows, empty = _a.empty, textEmpty = _a.textEmpty, loading = _a.loading, className = _a.className, rtl = _a.rtl, _b = _a.pageSize, pageSize = _b === void 0 ? 5 : _b, rowHeight = _a.rowHeight, currentPage = _a.currentPage, sortable = _a.sortable;
    var _c = (0, react_1.useState)(false), isSort = _c[0], setIsSort = _c[1];
    var _d = (0, react_1.useState)(''), isSortField = _d[0], setIsSortField = _d[1];
    var handleSort = (0, react_1.useCallback)(function (value) {
        setIsSort(!isSort);
        setIsSortField(value);
        sortable(value, isSort);
    }, [isSort, sortable]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: className }, { children: [loading && (0, jsx_runtime_1.jsx)(loading_1.Loading, {}), (0, jsx_runtime_1.jsx)("table", __assign({ style: { width: '100%' } }, { children: !loading && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [showRowNumber && ((0, jsx_runtime_1.jsx)("th", __assign({ style: { width: 25 } }, { children: columnNumberTitle }))), columns === null || columns === void 0 ? void 0 : columns.map(function (column) { return ((0, jsx_runtime_1.jsxs)("th", __assign({ className: column.sortable ? 'sort' : '', title: column.description, style: {
                                            width: column.width,
                                        } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: column.headerName }), column.sortable && ((0, jsx_runtime_1.jsx)("button", __assign({ type: 'button', className: rtl ? 'rtl' : 'ltr', onClick: function () {
                                                    return handleSort(column.field);
                                                } }, { children: isSort &&
                                                    isSortField === column.field ? ((0, jsx_runtime_1.jsx)(icons_1.BiSortDown, {})) : ((0, jsx_runtime_1.jsx)(icons_1.BiSortUp, {})) })))] }), (0, uuid_1.v4)())); })] }) }), (0, jsx_runtime_1.jsxs)("tbody", __assign({ className: 'tbody' }, { children: [!empty &&
                                    (rows === null || rows === void 0 ? void 0 : rows.map(function (row) { return ((0, jsx_runtime_1.jsxs)("tr", __assign({ style: { height: rowHeight } }, { children: [showRowNumber && ((0, jsx_runtime_1.jsx)("td", { children: rows.indexOf(row) +
                                                    1 +
                                                    pageSize *
                                                        (currentPage - 1) })), columns === null || columns === void 0 ? void 0 : columns.map(function (c) { return ((0, jsx_runtime_1.jsx)("td", { children: c.render
                                                    ? c.render(row)
                                                    : row[c.field] }, (0, uuid_1.v4)())); })] }), (0, uuid_1.v4)())); })), empty && ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { children: empty && ((0, jsx_runtime_1.jsx)(is_empty_1.IsEmpty, { textEmpty: textEmpty })) }) }))] }))] })) }))] })));
};
exports.Main = Main;
exports.Table = (0, react_1.memo)(exports.Main);
