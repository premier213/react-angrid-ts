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
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, _d = _a.rowHeight, rowHeight = _d === void 0 ? 30 : _d, _e = _a.pageNumber, pageNumber = _e === void 0 ? 1 : _e, _f = _a.showRowNumber, showRowNumber = _f === void 0 ? true : _f, _g = _a.columnNumberTitle, columnNumberTitle = _g === void 0 ? '#' : _g, columns = _a.columns, rows = _a.rows, _h = _a.loading, loading = _h === void 0 ? false : _h, _j = _a.pageSize, pageSize = _j === void 0 ? 20 : _j, _k = _a.onPageChange, onPageChange = _k === void 0 ? function () { } : _k, _l = _a.showTotalRecord, showTotalRecord = _l === void 0 ? false : _l, _m = _a.showCurrentPage, showCurrentPage = _m === void 0 ? false : _m, _o = _a.showNumberOfPage, showNumberOfPage = _o === void 0 ? false : _o, _p = _a.showPageRange, showPageRange = _p === void 0 ? true : _p, _q = _a.showPageSelect, showPageSelect = _q === void 0 ? true : _q, _r = _a.showPageNumber, showPageNumber = _r === void 0 ? true : _r, _s = _a.showPageArrow, showPageArrow = _s === void 0 ? true : _s, _t = _a.bordered, bordered = _t === void 0 ? false : _t, _u = _a.textCurrent, textCurrent = _u === void 0 ? locale.fa.current : _u, _v = _a.textTotal, textTotal = _v === void 0 ? locale.fa.total : _v, _w = _a.textNumber, textNumber = _w === void 0 ? locale.fa.number : _w, _x = _a.textEmpty, textEmpty = _x === void 0 ? locale.fa.empty : _x, _y = _a.textPage, textPage = _y === void 0 ? locale.fa.page : _y, _z = _a.totalCount, totalCount = _z === void 0 ? rows.length : _z, _0 = _a.rtl, rtl = _0 === void 0 ? false : _0, _1 = _a.internalPaginate, internalPaginate = _1 === void 0 ? true : _1;
    var _2 = useState(true), isLoading = _2[0], setIsLoading = _2[1];
    var _3 = useState(false), isEmpty = _3[0], setIsEmpty = _3[1];
    var _4 = useState([]), isRow = _4[0], setIsRow = _4[1];
    var _5 = useState(), indexOfLastRecord = _5[0], setIndexOfLastRecord = _5[1];
    var _6 = useState(), indexOfFirstRecord = _6[0], setIndexOfFirstRecord = _6[1];
    useEffect(function () {
        setIndexOfLastRecord(pageNumber * pageSize);
    }, [pageNumber, pageSize]);
    useEffect(function () {
        if (indexOfLastRecord)
            setIndexOfFirstRecord(indexOfLastRecord - pageSize);
    }, [indexOfLastRecord, pageSize]);
    var sortRows = useCallback(function (value, desc) {
        var sort = __spreadArray([], isRow, true).sort(function (a, b) {
            if (!desc) {
                return b[value] < a[value] ? 1 : -1;
            }
            return b[value] > a[value] ? 1 : -1;
        });
        setIsRow(sort);
    }, [isRow]);
    var handleSetPage = function (page) {
        onPageChange({ page: page, pageSize: pageSize });
    };
    var handleChangeSize = function (pageSizee) {
        onPageChange({ page: 1, pageSize: pageSizee });
    };
    useEffect(function () {
        setIsLoading(loading);
        if (rows.length === 0) {
            setIsEmpty(true);
        }
        else {
            setIsEmpty(false);
            if (internalPaginate) {
                setIsRow(rows === null || rows === void 0 ? void 0 : rows.slice(indexOfFirstRecord, indexOfLastRecord));
            }
            else {
                setIsRow(rows);
            }
        }
    }, [indexOfFirstRecord, indexOfLastRecord, internalPaginate, loading, rows]);
    return (_jsx("div", __assign({ className: "angrid ".concat(theme, " ").concat(className), style: { minHeight: rows.length === 0 ? '300px' : '' } }, { children: _jsxs("div", __assign({ className: 'asax' }, { children: [_jsx(Table, { rowHeight: rowHeight, textEmpty: textEmpty, rtl: rtl, className: bordered ? 'bordered' : '', showRowNumber: showRowNumber, columnNumberTitle: columnNumberTitle, columns: columns, rows: isRow, pageSize: pageSize, currentPage: pageNumber, empty: isEmpty, loading: isLoading, sortable: function (value, sort) {
                        return sortRows(value, sort);
                    } }), !isEmpty && !isLoading && (_jsx(Paginate, { textCurrent: textCurrent, textTotal: textTotal, textNumber: textNumber, rtl: rtl, totalCount: totalCount, pageSize: pageSize, range: range, showTotalRecord: showTotalRecord, showCurrentPage: showCurrentPage, showNumberOfPage: showNumberOfPage, showPageRange: showPageRange, showPageSelect: showPageSelect, showPageNumber: showPageNumber, showPageArrow: showPageArrow, page: pageNumber, setPage: handleSetPage, textPage: textPage, changeSize: handleChangeSize }))] })) })));
};
export var Angrid = memo(Main);
