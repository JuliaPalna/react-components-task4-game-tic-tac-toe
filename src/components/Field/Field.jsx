import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({ field }) => {
    return <FieldLayout field={field} />;
};

Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
};
