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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from 'react';
import './angrid.css';
import { locale } from './locale';
import { Paginate } from './paginate';
import { Table } from './table';
var range = [10, 20, 50, 100, 200, 500];
var Main = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, _d = _a.minHeight, minHeight = _d === void 0 ? 300 : _d, _e = _a.showRowNumber, showRowNumber = _e === void 0 ? true : _e, _f = _a.columnNumberTitle, columnNumberTitle = _f === void 0 ? '#' : _f, columns = _a.columns, rows = _a.rows, totalCount = _a.totalCount, _g = _a.loading, loading = _g === void 0 ? 0 : _g, _h = _a.pageSize, pageSize = _h === void 0 ? 20 : _h, onPageChange = _a.onPageChange, _j = _a.showTotalRecord, showTotalRecord = _j === void 0 ? false : _j, _k = _a.showCurrentPage, showCurrentPage = _k === void 0 ? false : _k, _l = _a.showNumberOfPage, showNumberOfPage = _l === void 0 ? false : _l, _m = _a.showPageRange, showPageRange = _m === void 0 ? true : _m, _o = _a.showPageSelect, showPageSelect = _o === void 0 ? true : _o, _p = _a.showPageNumber, showPageNumber = _p === void 0 ? true : _p, _q = _a.showPageArrow, showPageArrow = _q === void 0 ? true : _q, _r = _a.bordered, bordered = _r === void 0 ? false : _r, _s = _a.textCurrent, textCurrent = _s === void 0 ? locale.fa.current : _s, _t = _a.textTotal, textTotal = _t === void 0 ? locale.fa.total : _t, _u = _a.textNumber, textNumber = _u === void 0 ? locale.fa.number : _u, _v = _a.textEmpty, textEmpty = _v === void 0 ? locale.fa.empty : _v, _w = _a.rtl, rtl = _w === void 0 ? false : _w;
    var _x = useState(true), isLoading = _x[0], setIsLoading = _x[1];
    var _y = useState(false), isEmpty = _y[0], setIsEmpty = _y[1];
    var _z = useState([]), isRow = _z[0], setIsRow = _z[1];
    var _0 = useState(pageSize), isSize = _0[0], setIsSize = _0[1];
    var _1 = useState(1), page = _1[0], setPage = _1[1];
    var sortRows = useCallback(function (value, desc) {
        var sort = rows.sort(function (a, b) {
            if (!desc) {
                return b[value] > a[value] ? 1 : -1;
            }
            return a[value] > b[value] ? 1 : -1;
        });
        setIsRow(sort);
    }, [rows]);
    var handleSetPage = function (pageNumber) {
        setPage(pageNumber);
    };
    useEffect(function () {
        if (typeof loading !== 'number') {
            setIsLoading(loading);
            if (rows.length === 0) {
                setIsEmpty(true);
            }
            else {
                setIsEmpty(false);
                setIsRow(rows);
            }
        }
        else {
            setIsLoading(false);
            if (rows.length === 0) {
                setIsEmpty(true);
            }
            else {
                setIsEmpty(false);
                setIsRow(rows);
            }
        }
    }, [loading, rows]);
    useEffect(function () {
        if (pageSize && range.includes(pageSize)) {
            setIsSize(pageSize);
        }
    }, [pageSize]);
    return (_jsx("div", __assign({ className: "angrid ".concat(theme, " ").concat(className), style: { minHeight: "".concat(minHeight, "px") } }, { children: _jsxs("div", __assign({ className: 'asax' }, { children: [_jsx(Table, { textEmpty: textEmpty, rtl: rtl, currentPage: page, className: bordered ? 'bordered' : '', showRowNumber: showRowNumber, columnNumberTitle: columnNumberTitle, columns: columns, rows: isRow, pageSize: isSize, empty: isEmpty, loading: isLoading, sortable: function (value, sort) {
                        return sortRows(value, sort);
                    } }), !isEmpty && (_jsx(Paginate, { textCurrent: textCurrent, textTotal: textTotal, textNumber: textNumber, rtl: rtl, totalCount: totalCount, pageSize: isSize, onPageChange: onPageChange, range: range, showTotalRecord: showTotalRecord, showCurrentPage: showCurrentPage, showNumberOfPage: showNumberOfPage, showPageRange: showPageRange, showPageSelect: showPageSelect, showPageNumber: showPageNumber, showPageArrow: showPageArrow, page: page, setPage: handleSetPage }))] })) })));
};
export var Angrid = memo(Main);
