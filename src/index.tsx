import { useState, useEffect } from 'react';

type Props  = {
    initialPage?: number;
    initialSize?: number;
    initialTotal?: number;
}

const QUERY_PAGE = 'pageNo';
const QUERY_SIZE = 'pageSize';

const usePage = (props: Props = {}) => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const { initialPage = 1, initialSize = 10, initialTotal = 0 } = props;
    const initPage = params.get(QUERY_PAGE);
    const initSize = params.get(QUERY_SIZE);
    const [pageNo, setPageNo] = useState(initPage ? Number(initPage) : initialPage);
    const [pageSize, setPageSize] = useState(initSize ? Number(initSize) : initialSize);
    const [maxPage, setMaxPage] = useState(0);
    const [total, setTotal] = useState(initialTotal);

    const setParams = () => {
        params.set(QUERY_PAGE, pageNo.toString());
        params.set(QUERY_SIZE, pageSize.toString());

    }

    useEffect(setParams, [pageNo, pageSize]);

    useEffect(() => {
        setMaxPage(Math.ceil(total / pageSize));
    }, [pageSize, total]);

    return {
        pageNo,
        pageSize,
        total,
        maxPage,
        setPageNo,
        setPageSize,
        setTotal
    };
}

export { usePage };
