import { initialField } from './constants/constants';

const initialState = {
    currentPlayer: 'X',
    field: initialField,
    isGameEnded: false,
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PLAYER':
            return {
                ...state,
                currentPlayer: action.payload,
            };

        case 'SET_FIELD':
            return {
                ...state,
                field: action.payload,
            };

        case 'SET_STATUS_GAME':
            return { ...state, isGameEnded: true };

        case 'RESTART_GAME':
            return initialState;

        default:
            return state;
    }
};
