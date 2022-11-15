import { Skeleton } from 'antd';
import React from 'react';
import { useFetchNews } from '../../hooks/useFetchNews';
import { formatDate } from '../../utils/utilFunctions';
import styles from './NewsCard.module.css';

const NewsCard = (props) => {
    const { data, isLoading } = useFetchNews(props.id);

    const date = formatDate(data?.time);

    return (
        <>
            <Skeleton
                active={true}
                loading={!isLoading}
                paragraph={{ rows: 3 }}
                round={true}
                title={false}
            />
            {data && !isLoading && (
                <div className={styles.cardcontainer}>
                    <a href={data.url} target="blank">
                        {data.title}
                    </a>
                    <div>by {data.by}</div>
                    <div>{data.descendants} comments</div>
                    <div>{data.score} points</div>
                    <div>{date}</div>
                </div>
            )}
        </>
    );
};

export default NewsCard;
