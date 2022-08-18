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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from 'react';
import './angrid.css';
import { locale } from './locale';
import { Paginate } from './paginate';
import { Table } from './table';
var range = [5, 10, 20, 50, 100, 200, 500];
var Main = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, _d = _a.rowHeight, rowHeight = _d === void 0 ? 30 : _d, _e = _a.showRowNumber, showRowNumber = _e === void 0 ? true : _e, _f = _a.columnNumberTitle, columnNumberTitle = _f === void 0 ? '#' : _f, columns = _a.columns, rows = _a.rows, _g = _a.loading, loading = _g === void 0 ? false : _g, _h = _a.pageSize, pageSize = _h === void 0 ? 20 : _h, _j = _a.onPageChange, onPageChange = _j === void 0 ? function () { } : _j, _k = _a.showTotalRecord, showTotalRecord = _k === void 0 ? false : _k, _l = _a.showCurrentPage, showCurrentPage = _l === void 0 ? false : _l, _m = _a.showNumberOfPage, showNumberOfPage = _m === void 0 ? false : _m, _o = _a.showPageRange, showPageRange = _o === void 0 ? true : _o, _p = _a.showPageSelect, showPageSelect = _p === void 0 ? true : _p, _q = _a.showPageNumber, showPageNumber = _q === void 0 ? true : _q, _r = _a.showPageArrow, showPageArrow = _r === void 0 ? true : _r, _s = _a.bordered, bordered = _s === void 0 ? false : _s, _t = _a.textCurrent, textCurrent = _t === void 0 ? locale.fa.current : _t, _u = _a.textTotal, textTotal = _u === void 0 ? locale.fa.total : _u, _v = _a.textNumber, textNumber = _v === void 0 ? locale.fa.number : _v, _w = _a.textEmpty, textEmpty = _w === void 0 ? locale.fa.empty : _w, _x = _a.textPage, textPage = _x === void 0 ? locale.fa.page : _x, _y = _a.totalCount, totalCount = _y === void 0 ? rows.length : _y, _z = _a.rtl, rtl = _z === void 0 ? false : _z;
    var _0 = useState(true), isLoading = _0[0], setIsLoading = _0[1];
    var _1 = useState(false), isEmpty = _1[0], setIsEmpty = _1[1];
    var _2 = useState([]), isRow = _2[0], setIsRow = _2[1];
    var _3 = useState(pageSize), isSize = _3[0], setIsSize = _3[1];
    var _4 = useState(1), page = _4[0], setPage = _4[1];
    var indexOfLastRecord = page * isSize;
    var indexOfFirstRecord = indexOfLastRecord - isSize;
    var sortRows = useCallback(function (value, desc) {
        var sort = __spreadArray([], isRow, true).sort(function (a, b) {
            if (!desc) {
                return b[value] < a[value] ? 1 : -1;
            }
            return b[value] > a[value] ? 1 : -1;
        });
        setIsRow(sort);
    }, [isRow]);
    var handleSetPage = function (pageNumber) {
        setPage(pageNumber);
    };
    useEffect(function () {
        setIsLoading(loading);
        if (rows.length === 0) {
            setIsEmpty(true);
        }
        else {
            setIsEmpty(false);
            setIsRow(rows === null || rows === void 0 ? void 0 : rows.slice(indexOfFirstRecord, indexOfLastRecord));
        }
    }, [indexOfFirstRecord, indexOfLastRecord, loading, rows]);
    useEffect(function () {
        if (pageSize && range.includes(pageSize)) {
            setIsSize(pageSize);
        }
    }, [pageSize]);
    return (_jsx("div", __assign({ className: "angrid ".concat(theme, " ").concat(className), style: { minHeight: rows.length === 0 ? '300px' : '' } }, { children: _jsxs("div", __assign({ className: 'asax' }, { children: [_jsx(Table, { rowHeight: rowHeight, textEmpty: textEmpty, rtl: rtl, className: bordered ? 'bordered' : '', showRowNumber: showRowNumber, columnNumberTitle: columnNumberTitle, columns: columns, rows: isRow, pageSize: isSize, currentPage: page, empty: isEmpty, loading: isLoading, sortable: function (value, sort) {
                        return sortRows(value, sort);
                    } }), !isEmpty && !isLoading && (_jsx(Paginate, { textCurrent: textCurrent, textTotal: textTotal, textNumber: textNumber, rtl: rtl, totalCount: totalCount, pageSize: isSize, onPageChange: onPageChange, range: range, showTotalRecord: showTotalRecord, showCurrentPage: showCurrentPage, showNumberOfPage: showNumberOfPage, showPageRange: showPageRange, showPageSelect: showPageSelect, showPageNumber: showPageNumber, showPageArrow: showPageArrow, page: page, setPage: handleSetPage, textPage: textPage, changeSize: setIsSize }))] })) })));
};
export var Angrid = memo(Main);
