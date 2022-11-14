import { NavLink } from 'react-router-dom';
import styles from './AppLayout.module.css';

const AppLayout = ({ children }) => {
    const navItems = [
        { link: '/top', title: 'Hack News' },
        { link: '/new', title: 'new' },
        { link: '/comment', title: 'commets' },
    ];

    return (
        <div>
            <header>
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
            </header>
            {children}
        </div>
    );
};

export default AppLayout;
