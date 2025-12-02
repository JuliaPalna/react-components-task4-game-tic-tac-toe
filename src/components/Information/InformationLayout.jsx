import PropTypes from 'prop-types';

export const InformationLayout = ({ value }) => {
    return <p>{value}</p>;
};

InformationLayout.propTypes = {
    value: PropTypes.string.isRequired,
};
