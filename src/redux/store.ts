import { combineReducers, createStore } from 'redux';
import { calcReducer } from './calc-reducer';

const rootReducer = combineReducers({
  calc: calcReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
