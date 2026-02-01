import { useSelector } from 'react-redux';
import { checkNotFindEmptyCell } from '../../utils/utils';
import { InformationLayout } from './InformationLayout';
import {
    currentPlayerSelector,
    fieldSelector,
    isGameEndedSelector,
} from '../../selectors';

export const Information = () => {
    const currentPlayer = useSelector(currentPlayerSelector);
    const field = useSelector(fieldSelector);
    const isGameEnded = useSelector(isGameEndedSelector);

    let value = '';

    if (isGameEnded) {
        if (checkNotFindEmptyCell(field)) {
            value = 'Ничья';
        } else {
            value = `Победа: ${currentPlayer}`;
        }
    } else {
        value = `Ходит: ${currentPlayer}`;
    }

    return <InformationLayout value={value} />;
};
