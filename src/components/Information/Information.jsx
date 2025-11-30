import { InformationLayout } from './InformationLayout';

export const Information = ({ data }) => {
    const { currentPlayer, isDraw, isGameEnded } = data;
    let value = '';

    if (isDraw === true) {
        value = 'Ничья';
    } else if (isGameEnded === true) {
        value = `Победа: ${currentPlayer}`;
    } else {
        value = `Ходит: ${currentPlayer}`;
    }

    return <InformationLayout value={value} />;
};
