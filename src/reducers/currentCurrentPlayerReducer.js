const initialCurrentPlayerState = 'X';

export const currentPlayerReducer = (
    state = initialCurrentPlayerState,
    { type, payload },
) => {
    switch (type) {
        case 'SET_CURRENT_PLAYER':
            return payload;

        case 'RESTART_GAME':
            return initialCurrentPlayerState;

        default:
            return state;
    }
};
