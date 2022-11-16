import { useState } from 'react';
import { useFetchNewsList } from '../../hooks/useFetchNews';

import SpinOverlay from '../../components/commom/SpinOverlay/SpinOverlay';
import NewsCard from '../../components/NewsCard/NewsCard';
import Button from '../../components/commom/Button/Button';
import styles from './NewsPage.module.css';

const NewsPage = (props) => {
    const [slice, setSlice] = useState({ start: 0, end: 10 });

    const { data: newsList, isLoading } = useFetchNewsList(props.type);

    const handleBack = () => {
        setSlice((prev) => ({
            start: prev.start - 10,
            end: prev.end - 10,
        }));
    };

    const handleNext = () => {
        setSlice((prev) => ({
            start: prev.start + 10,
            end: prev.end + 10,
        }));
    };

    const getPageNumber = `${slice.start / 10 + 1} / ${newsList?.length / 10}`;

    return (
        <>
            {isLoading && <SpinOverlay />}
            {newsList &&
                newsList
                    .slice(slice.start, slice.end)
                    .map((id) => <NewsCard key={id} id={id} />)}
            <div className={styles.buttoncontainer}>
                <Button onClick={handleBack} disabled={slice.start === 0}>
                    Back
                </Button>
                <div>{getPageNumber}</div>
                <Button
                    onClick={handleNext}
                    disabled={newsList?.length <= slice.end}
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default NewsPage;
