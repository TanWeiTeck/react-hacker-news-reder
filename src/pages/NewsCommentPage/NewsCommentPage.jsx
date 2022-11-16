import { useParams } from 'react-router-dom';
import { useFetchNews } from '../../hooks/useFetchNews';

import CommentCard from '../../components/CommentCard/CommentCard';
import SpinOverlay from '../../components/commom/SpinOverlay/SpinOverlay';
import styles from './NewsCommentPage.module.css';

const NewsCommentPage = () => {
    const { id } = useParams();
    const { data, isLoading } = useFetchNews(id);

    return (
        <>
            {isLoading && <SpinOverlay />}
            <div className={styles.container}>
                {data?.kids.map((id) => (
                    <div className={styles.commentcard} key={id}>
                        <CommentCard
                            className={styles.commentcard}
                            id={id}
                        ></CommentCard>
                    </div>
                ))}
            </div>
        </>
    );
};

export default NewsCommentPage;
