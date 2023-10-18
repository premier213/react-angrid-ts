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
exports.Paginate = exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var uuid_1 = require("uuid");
var icons_1 = require("./icons");
var use_pagination_1 = require("./use-pagination");
var PaginateType;
(function (PaginateType) {
    PaginateType[PaginateType["NEXT"] = 0] = "NEXT";
    PaginateType[PaginateType["PREV"] = 1] = "PREV";
    PaginateType[PaginateType["SELECT"] = 2] = "SELECT";
})(PaginateType || (PaginateType = {}));
var Main = function (_a) {
    var _b = _a.totalCount, totalCount = _b === void 0 ? 1 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 20 : _c, range = _a.range, showTotalRecord = _a.showTotalRecord, showCurrentPage = _a.showCurrentPage, showNumberOfPage = _a.showNumberOfPage, showPageRange = _a.showPageRange, showPageSelect = _a.showPageSelect, showPageNumber = _a.showPageNumber, showPageArrow = _a.showPageArrow, textNumber = _a.textNumber, textTotal = _a.textTotal, textCurrent = _a.textCurrent, rtl = _a.rtl, page = _a.page, textPage = _a.textPage, changeSize = _a.changeSize, setPage = _a.setPage;
    var _d = (0, react_1.useState)([]), slices = _d[0], setSlices = _d[1];
    var _e = (0, use_pagination_1.usePagination)(totalCount, pageSize), pages = _e.pages, totalPageCount = _e.totalPageCount;
    (0, react_1.useEffect)(function () {
        if (pages.length > 5) {
            var slicer = [1, 2, 3, 4, 5];
            if (page < 3) {
                slicer = pages.slice(0, 5);
            }
            else if (page > totalPageCount - 3) {
                slicer = pages.slice(totalPageCount - 5, totalPageCount);
            }
            else {
                slicer = pages.slice(page - 3, page + 2);
            }
            setSlices(slicer);
        }
        else {
            setSlices(pages);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, totalPageCount]);
    /**
     * @description: handle paginate selection
     * @param {number} paginate type
     * @param {number} item
     * @returns {void} set page & callback onPageChange
     */
    var pageChanging = (0, react_1.useCallback)(function (value, item) {
        switch (value) {
            case PaginateType.NEXT:
                if (page < totalPageCount)
                    setPage(page + item);
                break;
            case PaginateType.PREV:
                if (page > 1)
                    setPage(page - item);
                break;
            case PaginateType.SELECT:
                setPage(item);
                break;
            default:
                break;
        }
    }, [page, setPage, totalPageCount]);
    var pageRangeEvent = function (event) {
        changeSize(+event.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'paginate' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'paginateBox' }, { children: [showCurrentPage && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'textPage' }, { children: totalCount && totalCount > pageSize && ((0, jsx_runtime_1.jsxs)("div", { children: [textCurrent, ": ", page] })) }))), showNumberOfPage && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'textPage' }, { children: totalCount && totalCount > pageSize && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'bordered-text' }, { children: [textNumber, ": ", totalPageCount] }))) }))), showTotalRecord && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'textPage' }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [textTotal, ":", totalCount] }) })))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'paginateBox' }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [showPageArrow && totalCount && totalCount > pageSize && ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () {
                                    return pageChanging(PaginateType.PREV, 1);
                                }, type: 'button', className: page === 1 ? 'disabled' : '' }, { children: rtl ? (0, jsx_runtime_1.jsx)(icons_1.FiChevronRight, {}) : (0, jsx_runtime_1.jsx)(icons_1.FiChevronLeft, {}) }))), showPageNumber && totalCount && totalCount > pageSize && ((0, jsx_runtime_1.jsx)("span", { children: slices.map(function (item) { return ((0, jsx_runtime_1.jsx)("button", __assign({ className: item === page ? 'active' : '', onClick: function () {
                                        return pageChanging(PaginateType.SELECT, item);
                                    }, type: 'button' }, { children: item }), (0, uuid_1.v4)())); }) }))] }), showPageSelect && totalCount && totalCount > pageSize && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'selectPage' }, { children: (0, jsx_runtime_1.jsx)("select", __assign({ value: page, onChange: function (event) {
                                return pageChanging(PaginateType.SELECT, +event.target.value);
                            } }, { children: pages.map(function (item) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: item }, { children: item }), (0, uuid_1.v4)())); }) })) }))), showPageRange && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rangePage' }, { children: (0, jsx_runtime_1.jsx)("select", __assign({ value: pageSize, onChange: function (event) { return pageRangeEvent(event); } }, { children: range.map(function (item) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: item }, { children: rtl
                                    ? "".concat(item, " / ").concat(textPage || '')
                                    : "".concat(textPage || '', " / ").concat(item) }), (0, uuid_1.v4)())); }) })) })))] }))] })));
};
exports.Main = Main;
exports.Paginate = (0, react_1.memo)(exports.Main);
