import { Spin } from 'antd';
import React from 'react';
import AppLayout from '../../components/AppLayout/AppLayout';
import NewsCard from '../../components/NewsCard/NewsCard';
import { useFetchNewsList } from '../../hooks/useFetchNews';

const TopNewsPage = () => {
    // const { data } = useFetchNews({ id: '2921983' });

    const { data: newsList, isLoading } = useFetchNewsList({ type: 'top' });

    return (
        <AppLayout>
            TopNewsPage
            {isLoading && <Spin />}
            {newsList &&
                newsList.slice(0, 5).map((id) => <NewsCard key={id} id={id} />)}
        </AppLayout>
    );
};

export default TopNewsPage;
