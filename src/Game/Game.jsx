import { connect } from 'react-redux';
import { RESTART_GAME } from '../actions';
import { GameContainer } from './GameContainer';

const mapGameDispatchToProps = (dispatch) => ({
    onRestartGame: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapGameDispatchToProps)(GameContainer);
