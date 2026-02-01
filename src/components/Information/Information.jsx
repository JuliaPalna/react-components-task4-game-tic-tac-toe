import { InformationLayout } from './InformationLayout';
import { store } from '../../store';
import { checkNotFindEmptyCell } from '../../utils/utils';
import { useEffect, useState } from 'react';

export const Information = () => {
    const [state, setState] = useState(() => store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        return () => unsubscribe();
    }, []);

    let value = '';

    if (state.isGameEnded) {
        if (checkNotFindEmptyCell(state.fields)) {
            value = 'Ничья';
        } else {
            value = `Победа: ${state.currentPlayer}`;
        }
    } else {
        value = `Ходит: ${state.currentPlayer}`;
    }

    return <InformationLayout value={value} />;
};
