import PropTypes from 'prop-types';
import styles from '../../styles/field.module.css';

export const FieldLayout = ({ field }) => {
    return (
        <ul className={styles.list}>
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
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
};
