/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from 'react'
import './angrid.css'
import { locale } from './locale'
import { Paginate } from './paginate'
import { Table } from './table'

export interface RowsType {
    [key: string]: any
}

export interface State {
    page: number
    pageSize: number
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
    pageNumber?: number
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
    internalPaginate?: boolean
    onPageChange?: (state: State) => void
}

const range = [5, 10, 20, 50, 100, 200, 500]

const Main = ({
    className = '',
    theme = 'light',
    rowHeight = 30,
    pageNumber = 1,
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
    internalPaginate = true,
}: PropsTypes): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isRow, setIsRow] = useState<PropsTypes['rows']>([])
    const [indexOfLastRecord, setIndexOfLastRecord] = useState<number>()
    const [indexOfFirstRecord, setIndexOfFirstRecord] = useState<number>()


    useEffect(() => {
        setIndexOfLastRecord(pageNumber * pageSize)
    }, [pageNumber, pageSize])

    useEffect(() => {
        if (indexOfLastRecord)
            setIndexOfFirstRecord(indexOfLastRecord - pageSize)
    }, [indexOfLastRecord, pageSize])

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

    const handleSetPage = (page: number): void => {
        onPageChange({ page, pageSize })
    }

    const handleChangeSize = (pageSizee: number): void => {
        onPageChange({ page: 1, pageSize: pageSizee })
    }


    useEffect(() => {
        setIsLoading(loading)
        if (rows.length === 0) {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
            if (internalPaginate) {
                setIsRow(rows?.slice(indexOfFirstRecord, indexOfLastRecord))
            } else {
                setIsRow(rows)
            }
        }
    }, [indexOfFirstRecord, indexOfLastRecord, internalPaginate, loading, rows])


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
                    pageSize={pageSize}
                    currentPage={pageNumber}
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
                        pageSize={pageSize}
                        range={range}
                        showTotalRecord={showTotalRecord}
                        showCurrentPage={showCurrentPage}
                        showNumberOfPage={showNumberOfPage}
                        showPageRange={showPageRange}
                        showPageSelect={showPageSelect}
                        showPageNumber={showPageNumber}
                        showPageArrow={showPageArrow}
                        page={pageNumber}
                        setPage={handleSetPage}
                        textPage={textPage}
                        changeSize={handleChangeSize}
                    />
                )}
            </div>
        </div>
    )
}

export const Angrid = memo(Main)
