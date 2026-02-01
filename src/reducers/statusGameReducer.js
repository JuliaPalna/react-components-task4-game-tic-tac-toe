const initialStatusGameState = false;

export const statusGameReducer = (
    state = initialStatusGameState,
    { type, payload },
) => {
    switch (type) {
        case 'SET_STATUS_GAME':
            return payload;

        case 'RESTART_GAME':
            return initialStatusGameState;

        default:
            return state;
    }
};
