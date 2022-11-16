import { useState } from 'react';
import { useFetchNews } from '../../hooks/useFetchNews';
import { formatDate } from '../../utils/utilFunctions';

import { UpOutlined } from '@ant-design/icons';
import styles from './CommentCard.module.css';

const CommentCard = (props) => {
    const [showChild, setShowChild] = useState(false);

    const { data } = useFetchNews(props.id);

    const date = formatDate(data?.time);

    return (
        <>
            {data && (
                <>
                    <div className={styles.content}>
                        <div className={styles.detail}>
                            <div>
                                <strong>{data?.by}</strong>
                                <div>{date}</div>
                            </div>
                            {data.kids && (
                                <button
                                    onClick={() => setShowChild(!showChild)}
                                >
                                    <UpOutlined
                                        className={
                                            showChild
                                                ? styles.icondown
                                                : styles.iconup
                                        }
                                    />
                                </button>
                            )}
                        </div>
                        <div>{data?.text || '-deleted-'}</div>
                    </div>
                    {showChild && (
                        <div className={styles.nextlevel}>
                            {data.kids &&
                                data.kids.map((id) => (
                                    <CommentCard key={id} id={id} />
                                ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default CommentCard;
