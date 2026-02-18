import { connect } from 'react-redux';
import { setCurrentPlayer, setField, setStatusGame } from '../../actions';
import { FieldContainer } from './FieldContainer';

const mapFieldStateToProps = (state) => ({
    field: state.field,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
});

const mapFieldDispatchToProps = (dispatch) => ({
    setField: (newField) => dispatch(setField(newField)),
    changeStatusGame: () => dispatch(setStatusGame(true)),
    setCurrentPlayer: (newPlayer) => dispatch(setCurrentPlayer(newPlayer)),
});

export const Field = connect(
    mapFieldStateToProps,
    mapFieldDispatchToProps,
)(FieldContainer);
