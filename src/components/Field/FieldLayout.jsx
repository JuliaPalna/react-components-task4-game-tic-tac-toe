import PropTypes from 'prop-types';
import styles from '../../styles/field.module.css';

export const FieldLayout = ({ field, onClick }) => {
    return (
        <ul className={styles.list} onClick={onClick}>
            {field.map((value, index) => {
                return (
                    <li key={index}>
                        <button data-key={index} className={styles['cell']}>
                            {value}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

FieldLayout.propTypes = {
    onClick: PropTypes.func.isRequired,
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
};
