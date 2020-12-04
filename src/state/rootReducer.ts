import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos/reducer';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  todos: todosReducer,
  ui: uiReducer,
});

export default rootReducer;
