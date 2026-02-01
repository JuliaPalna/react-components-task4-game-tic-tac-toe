import { GameLayout } from './GameLayout';
import { store } from '../../store';

export const Game = () => {
    const onRestartGame = () => {
        store.dispatch({ type: 'RESTART_GAME' });
    };

    return <GameLayout onRestartGame={onRestartGame} />;
};
