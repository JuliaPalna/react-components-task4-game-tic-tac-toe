import { initialField } from '../constants/constants';

const initialFieldState = initialField;

export const fieldReducer = (state = initialFieldState, { type, payload }) => {
    switch (type) {
        case 'SET_FIELD': {
            // const newField = [...state.field];
            // newField[payload] = state.currentPlayer;

            return payload;
        }

        case 'RESTART_GAME':
            return initialFieldState;

        default:
            return state;
    }
};
