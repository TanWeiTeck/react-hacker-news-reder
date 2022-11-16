import styles from './Button.module.css';

const Button = ({ onClick, children, disabled }) => {
    return (
        <button
            className={styles.button}
            disabled={disabled | false}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
