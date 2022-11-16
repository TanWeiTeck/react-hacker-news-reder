import { useNavigate } from 'react-router-dom';
import { useFetchNews } from '../../hooks/useFetchNews';
import { formatDate } from '../../utils/utilFunctions';

import { Skeleton } from 'antd';
import styles from './NewsCard.module.css';

const NewsCard = (props) => {
    const navigate = useNavigate();
    const { data, isLoading } = useFetchNews(props.id);

    const date = formatDate(data?.time);

    const handleComment = (id) => {
        data.kids && navigate(`newscomment/${id}`);
    };

    return (
        <>
            <Skeleton
                className={styles.skeleton}
                active={true}
                loading={isLoading}
                paragraph={{ rows: 3 }}
                round={true}
                title={false}
            />
            {data && !isLoading && (
                <div className={styles.cardcontainer}>
                    <div className={styles.content}>
                        <a
                            href={data.url}
                            target="blank"
                            className={styles.title}
                        >
                            {data.title}
                        </a>
                        <div>created on{date}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.author}>Author: {data.by}</div>
                        <div>{data.score} points</div>
                        <button
                            className={styles.button}
                            onClick={() => handleComment(data.id)}
                        >
                            {data.descendants} comments
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsCard;
