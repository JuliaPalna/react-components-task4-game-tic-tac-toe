import { createStore } from 'redux';
import { fieldReducer } from './reducer';

export const store = createStore(fieldReducer);
