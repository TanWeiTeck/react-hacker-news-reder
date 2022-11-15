import { Spin } from 'antd';
import React from 'react';
import { useFetchNews } from '../../hooks/useFetchNews';

const NewsCard = (props) => {
    const { data, isLoading } = useFetchNews(props.id);

    console.log('newsdata', data);

    return (
        <>
            {isLoading && <Spin />}
            {data && !isLoading && <div>NewsCard {data.id} </div>}
        </>
    );
};

export default NewsCard;
