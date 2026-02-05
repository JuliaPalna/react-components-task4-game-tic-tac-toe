import { initialField } from '../constants/constants';

const initialFieldState = initialField;

export const fieldReducer = (state = initialFieldState, { type, payload }) => {
    switch (type) {
        case 'SET_FIELD': {
            return payload;
        }

        case 'RESTART_GAME':
            return initialFieldState;

        default:
            return state;
    }
};
