import PropTypes from 'prop-types';
import { Field } from '../Field';
import { Information } from '../Information';
import styles from '../../styles/game.module.css';

export const GameLayout = ({
    restartGame,
    changeField,
    field,
    ...informationData
}) => {
    return (
        <div className={styles.container}>
            <h1>GAME</h1>

            <Information data={informationData} />
            <Field field={field} onClick={changeField} />

            <button className={styles['button-restart']} onClick={restartGame}>
                Начать заново
            </button>
        </div>
    );
};

Information.propTypes = {
    restartGame: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlayer: PropTypes.oneOf[('X', 'O')],
    isDraw: PropTypes.bool.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
};
