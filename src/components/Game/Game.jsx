import { useState } from 'react';
import { GameLayout } from './GameLayout';
import { initialField, WIN_PATTERNS } from '../../variables/field';
import { checkWinner, checkNotFindEmptyCell } from '../../utils/utils';

export const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(initialField);

    const restartGame = () => {
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
        setField(initialField);
    };

    const changeField = ({ target }) => {
        const currentcCell = target.dataset.key;

        if (field[currentcCell] !== '' || isGameEnded) {
            return;
        }

        const newField = [...field];
        newField[currentcCell] = currentPlayer;

        setField(newField);

        if (checkWinner(newField, WIN_PATTERNS)) {
            setIsGameEnded(true);
            return;
        }

        if (checkNotFindEmptyCell(newField)) {
            setIsDraw(true);
            return;
        }

        if (currentPlayer === 'X') {
            setCurrentPlayer('O');
        } else {
            setCurrentPlayer('X');
        }
    };

    return (
        <GameLayout
            restartGame={restartGame}
            changeField={changeField}
            field={field}
            currentPlayer={currentPlayer}
            isDraw={isDraw}
            isGameEnded={isGameEnded}
        />
    );
};
