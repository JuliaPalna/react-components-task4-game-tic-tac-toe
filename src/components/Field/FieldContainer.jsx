import { Component } from 'react';
import { WIN_PATTERNS } from '../../constants/constants';
import { checkNotFindEmptyCell, checkWinner } from '../../utils/utils';

export class FieldContainer extends Component {
    clickField = ({ target }) => {
        const {
            field,
            isGameEnded,
            currentPlayer,
            setField,
            changeStatusGame,
            setCurrentPlayer,
        } = this.props;

        const currentCell = target.dataset.key;

        if (field[currentCell] !== '' || isGameEnded) {
            return;
        }

        const newField = this.getNewField(currentCell);
        setField(newField);

        if (
            checkWinner(newField, WIN_PATTERNS) ||
            checkNotFindEmptyCell(newField)
        ) {
            changeStatusGame();
        } else {
            const newPlayer = currentPlayer === 'X' ? 'O' : 'X';

            setCurrentPlayer(newPlayer);
        }
    };

    getNewField(currentCell) {
        const { field, currentPlayer } = this.props;
        const newField = [...field];
        newField[currentCell] = currentPlayer;
        return newField;
    }

    render() {
        return (
            <ul
                className="mt-5 p-0
                            list-none
                            grid
                            grid-cols-3"
                onClick={this.clickField}
            >
                {this.props.field.map((value, index) => {
                    return (
                        <li
                            key={index}
                            className="border
                                        border-solid
                                        border-color: var(--color-white)"
                        >
                            <button
                                data-key={index}
                                className="size-16
                                            text-center
                                            hover: cursor-pointer"
                            >
                                {value}
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
