import { useState, useEffect } from 'react';

type Props  = {
    initialPage?: number;
    initialSize?: number;
    initialTotal?: number;
}

const QUERY_PAGE = 'pageNo';
const QUERY_SIZE = 'pageSize';

const usePage = (props: Props = {}) => {
    const urlParams = new URLSearchParams(window.location.search);
    const { initialPage = 1, initialSize = 10, initialTotal = 0 } = props;
    const initPage = urlParams.get(QUERY_PAGE);
    const initSize = urlParams.get(QUERY_SIZE);
    const [pageNo, setPageNo] = useState(initPage ? Number(initPage) : initialPage);
    const [pageSize, setPageSize] = useState(initSize ? Number(initSize) : initialSize);
    const [maxPage, setMaxPage] = useState(0);
    const [total, setTotal] = useState(initialTotal);

    const setParams = () => {
        urlParams.set(QUERY_PAGE, pageNo.toString());
        urlParams.set(QUERY_SIZE, pageSize.toString());
        history.replaceState(null, '', '?'+urlParams.toString());
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
