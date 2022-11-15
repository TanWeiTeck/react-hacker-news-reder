import { NavLink } from 'react-router-dom';
import styles from './AppLayout.module.css';

const AppLayout = ({ children }) => {
    const navItems = [
        { link: '/top', title: 'Top News' },
        { link: '/new', title: 'Latest News' },
        { link: '/comment', title: 'Commets' },
    ];

    return (
        <div>
            <header className={styles.container}>
                <div>
                    {/* <NavLink to={navItems[0].link}> */}
                    <a href={navItems[0].link}>
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-256/hackernews-2752164-2284981.png"
                            alt="hacker_news_logo"
                            className={styles.logo}
                            // width={100}
                            // heigth={100}
                        />
                    </a>
                    {/* </NavLink> */}
                </div>
                <div className={styles.nav}>
                    {navItems.map((navItem, index) => (
                        <NavLink
                            to={navItem.link}
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                            key={index}
                        >
                            {navItem.title}
                        </NavLink>
                    ))}
                </div>
                <div>Login</div>
            </header>
            {children}
        </div>
    );
};

export default AppLayout;
