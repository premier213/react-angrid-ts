/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from 'react'
import './angrid.css'
import { locale } from './locale'
import { Paginate } from './paginate'
import { Table } from './table'

export interface RowsType {
    [key: string]: any
}

export type Locale = {
    [key: string]: string
}

export type Lang = keyof typeof locale
export interface Columns {
    field: string
    headerName: string
    description?: string
    width?: number
    sortable?: boolean
    render?: (row: RowsType) => JSX.Element
}
export interface PropsTypes {
    className?: string
    theme?: 'dark' | 'light'
    rowHeight?: number
    columnNumberTitle?: string
    showRowNumber: boolean
    columns: Columns[]
    rows: RowsType[]
    pageSize?: number
    totalCount?: number
    loading?: boolean
    showTotalRecord?: boolean
    showCurrentPage?: boolean
    showNumberOfPage?: boolean
    showPageRange?: boolean
    showPageSelect?: boolean
    showPageNumber?: boolean
    showPageArrow?: boolean
    bordered?: boolean
    textCurrent?: string
    textTotal?: string
    textNumber?: string
    textEmpty?: string
    textPage?: string
    rtl?: boolean
    onPageChange?: (current: number, size: number) => void
}

const range = [5, 10, 20, 50, 100, 200, 500]

const Main = ({
    className = '',
    theme = 'light',
    rowHeight = 30,
    showRowNumber = true,
    columnNumberTitle = '#',
    columns,
    rows,
    loading = false,
    pageSize = 20,
    onPageChange = (): void => {},
    showTotalRecord = false,
    showCurrentPage = false,
    showNumberOfPage = false,
    showPageRange = true,
    showPageSelect = true,
    showPageNumber = true,
    showPageArrow = true,
    bordered = false,
    textCurrent = locale.fa.current,
    textTotal = locale.fa.total,
    textNumber = locale.fa.number,
    textEmpty = locale.fa.empty,
    textPage = locale.fa.page,
    totalCount = rows.length,
    rtl = false,
}: PropsTypes): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isRow, setIsRow] = useState<PropsTypes['rows']>([])

    const [isSize, setIsSize] = useState(pageSize)
    const [page, setPage] = useState<number>(1)
    const indexOfLastRecord = page * isSize
    const indexOfFirstRecord = indexOfLastRecord - isSize

    const sortRows = useCallback(
        (value: string, desc: boolean): void => {
            const sort = [...isRow].sort((a, b) => {
                if (!desc) {
                    return b[value] < a[value] ? 1 : -1
                }

                return b[value] > a[value] ? 1 : -1
            })

            setIsRow(sort)
        },
        [isRow]
    )

    const handleSetPage = (pageNumber: number): void => {
        setPage(pageNumber)
    }

    useEffect(() => {
        setIsLoading(loading)
        if (rows.length === 0) {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
            setIsRow(rows?.slice(indexOfFirstRecord, indexOfLastRecord))
        }
    }, [indexOfFirstRecord, indexOfLastRecord, loading, rows])

    useEffect(() => {
        if (pageSize && range.includes(pageSize)) {
            setIsSize(pageSize)
        }
    }, [pageSize])

    return (
        <div
            className={`angrid ${theme} ${className}`}
            style={{ minHeight: rows.length === 0 ? '300px' : '' }}
        >
            <div className='asax'>
                <Table
                    rowHeight={rowHeight}
                    textEmpty={textEmpty}
                    rtl={rtl}
                    className={bordered ? 'bordered' : ''}
                    showRowNumber={showRowNumber}
                    columnNumberTitle={columnNumberTitle}
                    columns={columns}
                    rows={isRow}
                    pageSize={isSize}
                    currentPage={page}
                    empty={isEmpty}
                    loading={isLoading}
                    sortable={(value: string, sort: boolean): void =>
                        sortRows(value, sort)
                    }
                />

                {!isEmpty && !isLoading && (
                    <Paginate
                        textCurrent={textCurrent}
                        textTotal={textTotal}
                        textNumber={textNumber}
                        rtl={rtl}
                        totalCount={totalCount}
                        pageSize={isSize}
                        onPageChange={onPageChange}
                        range={range}
                        showTotalRecord={showTotalRecord}
                        showCurrentPage={showCurrentPage}
                        showNumberOfPage={showNumberOfPage}
                        showPageRange={showPageRange}
                        showPageSelect={showPageSelect}
                        showPageNumber={showPageNumber}
                        showPageArrow={showPageArrow}
                        page={page}
                        setPage={handleSetPage}
                        textPage={textPage}
                        changeSize={setIsSize}
                    />
                )}
            </div>
        </div>
    )
}

export const Angrid = memo(Main)
