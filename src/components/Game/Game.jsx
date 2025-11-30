import { useState } from 'react';
import { GameLayout } from './GameLayout';
import { field, WIN_PATTERNS } from '../../variables/field';
import { checkWinner, checkNotFindEmptyCell } from '../../utils/utils';

export const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);

    const handelClickRestart = () => {
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);

        for (let i = 0; i < field.length; i++) {
            field[i] = '';
        }
    };

    const handelClickField = (cell) => {
        if (field[cell] !== '') {
            return;
        }

        field[cell] = currentPlayer;

        if (checkWinner(field, WIN_PATTERNS)) {
            setIsGameEnded(true);
            return;
        }

        if (checkNotFindEmptyCell(field)) {
            setIsDraw(true);
        }

        if (currentPlayer === 'X') {
            setCurrentPlayer('O');
        } else {
            setCurrentPlayer('X');
        }
    };

    const handelClick = ({ target }) => {
        if (target.className.includes('button-restart')) {
            handelClickRestart();
            return;
        }

        if (target.className.includes('cell')) {
            const currentCell = target.dataset.key;
            handelClickField(currentCell);
        }
    };

    return (
        <GameLayout
            onClick={handelClick}
            field={field}
            currentPlayer={currentPlayer}
            isDraw={isDraw}
            isGameEnded={isGameEnded}
        />
    );
};
