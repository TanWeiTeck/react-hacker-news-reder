import { NavLink } from 'react-router-dom';

import Button from '../commom/Button/Button';
import styles from './Header.module.css';

export const navItems = [
    { type: 'top', link: '/top', title: 'Top News' },
    { type: 'new', link: '/new', title: 'Latest News' },
    { type: 'best', link: '/best', title: 'Best News' },
];

const Header = ({ setAlert }) => {
    const handleLogin = () => {
        setAlert({ show: true, message: 'comming soon !!' });
    };

    return (
        <header className={styles.container}>
            <a href={navItems[0].link}>
                <img
                    src="https://cdn.iconscout.com/icon/free/png-256/hackernews-2752164-2284981.png"
                    alt="hacker_news_logo"
                    className={styles.logo}
                />
            </a>
            <div className={styles.navbar}>
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
            <Button onClick={handleLogin}>Login</Button>
        </header>
    );
};

export default Header;
