import type { PropsTypes } from './an-grid';
declare type Props = Partial<PropsTypes> & {
    range: number[];
    page: number;
    totalCount: number;
    changeSize: (size: number) => void;
    setPage: (page: number) => void;
};
export declare const Main: ({ totalCount, pageSize, range, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, textNumber, textTotal, textCurrent, rtl, page, textPage, changeSize, setPage, }: Props) => JSX.Element;
export declare const Paginate: import("react").MemoExoticComponent<({ totalCount, pageSize, range, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, textNumber, textTotal, textCurrent, rtl, page, textPage, changeSize, setPage, }: Props) => JSX.Element>;
export {};
