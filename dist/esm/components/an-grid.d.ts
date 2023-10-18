import './angrid.css';
import { locale } from './locale';
export interface RowsType {
    [key: string]: any;
}
export interface State {
    page: number;
    pageSize: number;
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
export interface PropsTypes {
    className?: string;
    pageNumber?: number;
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
    onPageChange?: (state: State) => void;
}
export declare const Angrid: import("react").MemoExoticComponent<({ className, theme, rowHeight, pageNumber, showRowNumber, columnNumberTitle, columns, rows, loading, pageSize, onPageChange, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, bordered, textCurrent, textTotal, textNumber, textEmpty, textPage, totalCount, rtl, internalPaginate, }: PropsTypes) => JSX.Element>;
