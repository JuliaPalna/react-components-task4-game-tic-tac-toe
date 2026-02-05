import { useDispatch } from 'react-redux';
import { RESTART_GAME } from '../../actions';
import { GameLayout } from './GameLayout';

export const Game = () => {
    const dispatch = useDispatch();
    const onRestartGame = () => {
        dispatch(RESTART_GAME);
    };

    return <GameLayout onRestartGame={onRestartGame} />;
};
