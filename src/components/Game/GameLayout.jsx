import { Field } from '../Field';
import { Information } from '../Information';
import styles from '../../styles/game.module.css';

export const GameLayout = ({ onClick, field, ...informationData }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <h1>GAME</h1>

            <Information data={informationData} />
            <Field field={field} />

            <button className={styles['button-restart']}>Начать заново</button>
        </div>
    );
};
