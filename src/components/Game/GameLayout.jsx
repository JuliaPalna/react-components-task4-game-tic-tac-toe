import PropTypes from 'prop-types';
import { Field } from '../Field';
import { Information } from '../Information';
import styles from '../../styles/game.module.css';

export const GameLayout = ({ onRestartGame }) => {
    return (
        <div className={styles.container}>
            <h1>GAME</h1>

            <Information />
            <Field />

            <button
                className={styles['button-restart']}
                onClick={onRestartGame}
            >
                Начать заново
            </button>
        </div>
    );
};

Information.propTypes = {
    onRestartGame: PropTypes.func.isRequired,
};
