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
export interface PropsTypes {
    className?: string;
    theme?: 'dark' | 'light';
    rowHeight?: number;
    columnNumberTitle?: string;
    showRowNumber: boolean;
    columns: Columns[];
    rows: RowsType[];
    pageSize?: number;
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
    onPageChange?: (current: number, size: number) => void;
}
export declare const Angrid: import("react").MemoExoticComponent<({ className, theme, rowHeight, showRowNumber, columnNumberTitle, columns, rows, loading, pageSize, onPageChange, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, bordered, textCurrent, textTotal, textNumber, textEmpty, textPage, rtl, }: PropsTypes) => JSX.Element>;
