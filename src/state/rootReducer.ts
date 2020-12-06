import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos/reducer';
import { filterReducer } from './filter';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default rootReducer;
