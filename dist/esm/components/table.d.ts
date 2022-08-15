import type { PropsTypes } from './an-grid';
declare type Props = Partial<PropsTypes> & {
    empty: boolean;
    loading: boolean;
    currentPage: number;
    sortable: (value: string, sort: boolean) => void;
};
export declare const Main: ({ showRowNumber, columnNumberTitle, columns, rows, empty, textEmpty, loading, className, rtl, pageSize, rowHeight, currentPage, sortable, }: Props) => JSX.Element;
export declare const Table: import("react").MemoExoticComponent<({ showRowNumber, columnNumberTitle, columns, rows, empty, textEmpty, loading, className, rtl, pageSize, rowHeight, currentPage, sortable, }: Props) => JSX.Element>;
export {};
