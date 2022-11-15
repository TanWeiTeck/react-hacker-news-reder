import { useQuery } from 'react-query';
import { createFetchAPI } from '../services/http';

const defaultFetchSettings = {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
};

export const useFetchNewsList = (props) => {
    const fetchNewsList = () => createFetchAPI(`${props.type}stories.json`);

    return useQuery(
        ['useFetchNewsList', props.type],
        fetchNewsList
        // defaultFetchSettings
    );
};

export const useFetchNews = (id) => {
    // const { data: dataList } = useFetchNewsList(props.type);

    const fetchNews = () => createFetchAPI(`item/${id}.json`);

    return useQuery(['useFetchNewsList', id], fetchNews, defaultFetchSettings);
};
