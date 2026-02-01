import PropTypes from 'prop-types';
import styles from '../../styles/field.module.css';

export const FieldLayout = ({ fields, onClick }) => {
    return (
        <ul className={styles.list} onClick={onClick}>
            {fields.map((value, index) => {
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
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
};
