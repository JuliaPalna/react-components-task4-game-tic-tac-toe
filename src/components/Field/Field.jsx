// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store';
import {
    currentPlayerSelector,
    fieldSelector,
    isGameEndedSelector,
} from '../../selectors';
import { WIN_PATTERNS } from '../../constants/constants';
import { checkNotFindEmptyCell, checkWinner } from '../../utils/utils';
import { FieldLayout } from './FieldLayout';

export const Field = () => {
    // const [state, setState] = useState(() => store.getState());

    const currentPlayer = useSelector(currentPlayerSelector);
    const field = useSelector(fieldSelector);
    const isGameEnded = useSelector(isGameEndedSelector);

    // useEffect(() => {
    //     const unsubscribe = store.subscribe(() => {
    //         setState(store.getState());
    //     });

    //     return () => unsubscribe();
    // }, []);

    const onClick = ({ target }) => {
        const currentCell = target.dataset.key;
        // const currentState = store.getState();

        if (field[currentCell] !== '' || isGameEnded) {
            return;
        }

        store.dispatch({ type: 'SET_FIELD', payload: target.dataset.key });

        // const updatedState = store.getState();

        if (checkWinner(field, WIN_PATTERNS) || checkNotFindEmptyCell(field)) {
            store.dispatch({ type: 'SET_STATUS_GAME', payload: true });
        } else {
            const newPlayer = currentPlayer === 'X' ? 'O' : 'X';

            store.dispatch({
                type: 'SET_CURRENT_PLAYER',
                payload: newPlayer,
            });
        }
    };

    return <FieldLayout field={field} onClick={onClick} />;
};
