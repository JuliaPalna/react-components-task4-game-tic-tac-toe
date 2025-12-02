import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({ field, onClick }) => {
    return <FieldLayout field={field} onClick={onClick} />;
};

Field.propTypes = {
    onClick: PropTypes.func.isRequired,
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
};
