import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import styles from './ScrollTop.module.css';

const ScrollTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <>
            {showTopBtn && (
                <div className={styles.container}>
                    <button className={styles.button} onClick={scrollToTop}>
                        <VerticalAlignTopOutlined />
                    </button>
                </div>
            )}
        </>
    );
};

export default ScrollTop;
