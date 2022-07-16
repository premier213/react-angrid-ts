import { memo, useCallback, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'
import type { PropsTypes } from './an-grid'
import { usePagination } from './use-pagination'

enum PaginateType {
    NEXT,
    PREV,
    SELECT,
}

type Props = Partial<PropsTypes> & {
    range: number[]
}

export const Main = ({
    totalCount = 1,
    pageSize = 20,
    onPageChange,
    range,
    showTotalRecord,
    titleTotalRecord,
    showCurrentPage,
    titleCurrentPage,
    showNumberOfPage,
    titleNumberOfPage,
    showPageRange,
    showPageSelect,
    showPageNumber,
    showPageArrow,
}: Props): JSX.Element => {
    const [page, setPage] = useState(1)
    const [slices, setSlices] = useState<number[]>([])
    const [rangePageSize, setRangePageSize] = useState<number>(pageSize)
    const { pages, totalPageCount } = usePagination(totalCount, pageSize)

    useEffect(() => {
        if (typeof onPageChange !== 'undefined') {
            onPageChange(page, rangePageSize)
        }
        if (pages.length > 5) {
            let slicer = [1, 2, 3, 4, 5]
            if (page < 3) {
                slicer = pages.slice(0, 5)
            } else if (page > totalPageCount - 3) {
                slicer = pages.slice(totalPageCount - 5, totalPageCount)
            } else {
                slicer = pages.slice(page - 3, page + 2)
            }
            setSlices(slicer)
        } else {
            setSlices(pages)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSize, onPageChange, page, rangePageSize, totalPageCount])

    /**
     * @description: handle paginate selection
     * @param {number} paginate type
     * @param {number} item
     * @returns {void} set page & callback onPageChange
     */
    const pageChanging = useCallback(
        (value: PaginateType, item: number): void => {
            switch (value) {
                case PaginateType.NEXT:
                    if (page < totalPageCount) setPage(page + item)
                    break
                case PaginateType.PREV:
                    if (page > 1) setPage(page - item)
                    break
                case PaginateType.SELECT:
                    setPage(item)
                    break

                default:
                    break
            }
        },
        [page, totalPageCount]
    )

    return (
        <div className='paginate'>
            {/* button select page */}
            <div>
                {showPageArrow && (
                    <button
                        onClick={(): void => pageChanging(PaginateType.PREV, 1)}
                        type='button'
                        className={page === 1 ? 'disabled' : ''}
                    >
                        <FiChevronLeft />
                    </button>
                )}

                {showPageNumber && (
                    <span>
                        {slices.map((item) => (
                            <button
                                key={uuidv4()}
                                className={item === page ? 'active' : ''}
                                onClick={(): void =>
                                    pageChanging(PaginateType.SELECT, item)
                                }
                                type='button'
                            >
                                {item}
                            </button>
                        ))}
                    </span>
                )}

                {showPageArrow && (
                    <button
                        onClick={(): void => pageChanging(PaginateType.NEXT, 1)}
                        type='button'
                        className={page === totalPageCount ? 'disabled' : ''}
                    >
                        <FiChevronRight />
                    </button>
                )}
            </div>
            {/* select page */}
            {showPageSelect && (
                <div className='selectPage'>
                    <select
                        value={page}
                        onChange={(event): void =>
                            pageChanging(
                                PaginateType.SELECT,
                                +event.target.value
                            )
                        }
                    >
                        {pages.map((item) => (
                            <option value={item} key={uuidv4()}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {/* page range */}
            {showPageRange && (
                <div className='rangePage'>
                    <select
                        value={rangePageSize}
                        onChange={(event): void =>
                            setRangePageSize(+event.target.value)
                        }
                    >
                        {range.map((item: number) => (
                            <option value={item} key={uuidv4()}>
                                {`${totalCount} / ${item}`}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {/* total record */}
            {showTotalRecord && (
                <div className='textPage'>
                    {titleTotalRecord}: {totalCount}
                </div>
            )}
            {/* current page */}
            {showCurrentPage && (
                <div className='textPage'>
                    {titleCurrentPage}: {page}
                </div>
            )}
            {/* number of page */}
            {showNumberOfPage && (
                <div className='textPage'>
                    {titleNumberOfPage}: {totalPageCount}
                </div>
            )}
        </div>
    )
}

export const Paginate = memo(Main)
