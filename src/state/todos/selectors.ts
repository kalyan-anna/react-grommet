import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

const selectTodosState = (state: RootState) => state.todos;

const selectTodos = createSelector(selectTodosState, ({ todoMap }) =>
  Object.values(todoMap),
);

export const todosSelectors = {
  selectTodos,
};
