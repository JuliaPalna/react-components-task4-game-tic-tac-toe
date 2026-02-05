import { useSelector, useDispatch } from 'react-redux';
import {
    currentPlayerSelector,
    fieldSelector,
    isGameEndedSelector,
} from '../../selectors';
import { WIN_PATTERNS } from '../../constants/constants';
import { checkNotFindEmptyCell, checkWinner } from '../../utils/utils';
import { FieldLayout } from './FieldLayout';
import { setCurrentPlayer, setField, setStatusGame } from '../../actions';

export const Field = () => {
    const currentPlayer = useSelector(currentPlayerSelector);
    const field = useSelector(fieldSelector);
    const isGameEnded = useSelector(isGameEndedSelector);

    const dispatch = useDispatch();

    const onClick = ({ target }) => {
        const currentCell = target.dataset.key;

        if (field[currentCell] !== '' || isGameEnded) {
            return;
        }

        const newField = [...field];
        newField[currentCell] = currentPlayer;

        dispatch(setField(newField));

        if (
            checkWinner(newField, WIN_PATTERNS) ||
            checkNotFindEmptyCell(newField)
        ) {
            dispatch(setStatusGame(true));
        } else {
            const newPlayer = currentPlayer === 'X' ? 'O' : 'X';

            dispatch(setCurrentPlayer(newPlayer));
        }
    };

    return <FieldLayout field={field} onClick={onClick} />;
};
