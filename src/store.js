import { combineReducers, createStore } from 'redux';
import {
    currentPlayerReducer,
    statusGameReducer,
    fieldReducer,
} from './reducers';

const gameReducer = combineReducers({
    currentPlayer: currentPlayerReducer,
    field: fieldReducer,
    isGameEnded: statusGameReducer,
});

export const store = createStore(gameReducer);
