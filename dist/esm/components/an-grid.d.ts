import './angrid.css';
import { locale } from './locale';
export interface RowsType {
    [key: string]: any;
}
export declare type Locale = {
    [key: string]: string;
};
export declare type Lang = keyof typeof locale;
export interface Columns {
    field: string;
    headerName: string;
    description?: string;
    width?: number;
    sortable?: boolean;
    render?: (row: RowsType) => JSX.Element;
}
export declare type State = {
    page: number;
    changedPageRange: number;
};
export interface PropsTypes {
    className?: string;
    theme?: 'dark' | 'light';
    rowHeight?: number;
    columnNumberTitle?: string;
    showRowNumber: boolean;
    columns: Columns[];
    rows: RowsType[];
    pageSize?: number;
    totalCount?: number;
    loading?: boolean;
    showTotalRecord?: boolean;
    showCurrentPage?: boolean;
    showNumberOfPage?: boolean;
    showPageRange?: boolean;
    showPageSelect?: boolean;
    showPageNumber?: boolean;
    showPageArrow?: boolean;
    bordered?: boolean;
    textCurrent?: string;
    textTotal?: string;
    textNumber?: string;
    textEmpty?: string;
    textPage?: string;
    rtl?: boolean;
    internalPaginate?: boolean;
    resetPage?: boolean;
    onPageChange?: (stat: State) => void;
}
export declare const Angrid: import("react").MemoExoticComponent<({ className, theme, rowHeight, showRowNumber, columnNumberTitle, columns, rows, loading, pageSize, onPageChange, resetPage, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, bordered, textCurrent, textTotal, textNumber, textEmpty, textPage, totalCount, rtl, internalPaginate, }: PropsTypes) => JSX.Element>;
