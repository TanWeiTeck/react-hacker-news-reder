import { useQuery } from 'react-query';
import { createFetchAPI } from '../services/http';

export const useFetchNewsList = (type) => {
    const fetchNewsList = () => createFetchAPI(`${type}stories.json`);

    return useQuery(['useFetchNewsList', type], fetchNewsList);
};

export const useFetchNews = (id) => {
    const fetchNews = () => createFetchAPI(`item/${id}.json?print=pretty`);

    return useQuery(['useFetchNewsList', id], fetchNews);
};
