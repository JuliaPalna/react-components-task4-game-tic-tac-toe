import { useEffect, useState } from 'react';
import { store } from '../../store';
import { WIN_PATTERNS } from '../../constants/constants';
import { checkNotFindEmptyCell, checkWinner } from '../../utils/utils';
import { FieldLayout } from './FieldLayout';

export const Field = () => {
    const [state, setState] = useState(() => store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        return () => unsubscribe();
    }, []);

    const onClick = ({ target }) => {
        const currentCell = target.dataset.key;
        const currentState = store.getState();

        if (
            currentState.field[currentCell] !== '' ||
            currentState.isGameEnded
        ) {
            return;
        }

        store.dispatch({ type: 'SET_FIELD', payload: target.dataset.key });

        const updatedState = store.getState();

        if (
            checkWinner(updatedState.field, WIN_PATTERNS) ||
            checkNotFindEmptyCell(updatedState.field)
        ) {
            store.dispatch({ type: 'SET_STATUS_GAME', payload: true });
        } else {
            const newPlayer = updatedState.currentPlayer === 'X' ? 'O' : 'X';

            store.dispatch({
                type: 'SET_CURRENT_PLAYER',
                payload: newPlayer,
            });
        }
    };

    return <FieldLayout field={state.field} onClick={onClick} />;
};
