export var usePagination = function (totalCount, pageSize) {
    if (pageSize === void 0) { pageSize = 1; }
    var pages = [];
    console.log(Math.ceil(totalCount / pageSize));
    console.log('🚀 ~ file: use-pagination.ts ~ line 20 ~ pageSize', pageSize);
    console.log('🚀 ~ file: use-pagination.ts ~ line 20 ~ totalCount', totalCount);
    var totalPageCount = typeof totalCount === 'number' && totalCount > pageSize
        ? Math.ceil(totalCount / pageSize)
        : 1;
    for (var index = 1; index <= totalPageCount; index += 1) {
        pages.push(index);
    }
    return {
        totalPageCount: totalPageCount,
        pages: pages,
    };
};
