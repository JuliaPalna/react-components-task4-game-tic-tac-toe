import { initialFields } from './constants/constants';

const initialState = {
    currentPlayer: 'X',
    fields: initialFields,
    isGameEnded: false,
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PLAYER':
            return {
                ...state,
                currentPlayer: action.payload,
            };

        case 'SET_FIELD': {
            const newFields = [...state.fields];
            newFields[action.payload] = state.currentPlayer;

            return {
                ...state,
                fields: newFields,
            };
        }

        case 'SET_STATUS_GAME':
            return { ...state, isGameEnded: true };

        case 'RESTART_GAME':
            return initialState;

        default:
            return state;
    }
};
