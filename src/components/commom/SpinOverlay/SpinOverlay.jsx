import { Spin as AntSpin } from 'antd';
import styles from './SpinOverlay.module.css';

const SpinOverlay = (props) => (
    <div className={styles.spinContainer}>
        <AntSpin {...props} />
    </div>
);

export default SpinOverlay;
