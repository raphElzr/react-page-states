import { useState, useEffect } from 'react';

type Props = {
    initialPage?: number;
    initialSize?: number;
    initialTotal?: number;
}

const QUERY_PAGE = 'pageNo';
const QUERY_SIZE = 'pageSize';

const usePage = (props: Props = {}) => {
    const getSearchParams = () => {
        let searchParams = {};
        let searchMatch = window.location.href.match(/(?<=\?)(.*?)(?=#|\/|$)/g);
    
        if (searchMatch && searchMatch.length > 0) {
            let params = searchMatch[0].split('&');
    
            params.forEach((param) => {
                let item = param.split('=');
                searchParams[item[0]] = item[1];
            });
        }
    
        return searchParams;
    }
    
    const setSearchParams = (searchParams: any): void => {
        let oldSearchParams = getSearchParams();
        let newSearchParams = { ...oldSearchParams, ...searchParams };
        let newParamString = '';

        Object.keys(newSearchParams).forEach((key) => {
            newParamString = newParamString ? newParamString + '&' : '';
            newParamString = newParamString + key + '=' + newSearchParams[key];
        });

        let newURL = '';

        if (Object.keys(oldSearchParams).length > 0) {
            newURL = window.location.href.replace(/(?<=\?)(.*?)(?=#|\/|$)/g, newParamString);
        } else {
            newURL = window.location.href + '?' + newParamString;
        }

        window.history.replaceState(null, '', newURL);
    }

    const searchParams = getSearchParams();
    const { initialPage = 1, initialSize = 10, initialTotal = 0 } = props;
    const initPage = searchParams[QUERY_PAGE];
    const initSize = searchParams[QUERY_SIZE];
    const [pageNo, setPageNo] = useState(initPage ? Number(initPage) : initialPage);
    const [pageSize, setPageSize] = useState(initSize ? Number(initSize) : initialSize);
    const [maxPage, setMaxPage] = useState(0);
    const [total, setTotal] = useState(initialTotal);
    const [initialLoad, setInitialLoad] = useState(true);

    const setParams = () => {
        if (!initialLoad) {
            setSearchParams({
                pageNo: pageNo.toString(),
                pageSize: pageSize.toString()
            });
        } else {
            setInitialLoad(false);
        }
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
