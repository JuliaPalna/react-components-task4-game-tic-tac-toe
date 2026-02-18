import { connect } from 'react-redux';
import { InformationContainer } from './InformationContainer';

const mapInformationStateToProps = (state) => ({
    field: state.field,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
});

export const Information = connect(mapInformationStateToProps)(
    InformationContainer,
);
