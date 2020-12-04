import { createSelector } from '@reduxjs/toolkit';
import { uiSelectors, UIState } from '@state/ui';
import { RootState } from 'state/store';

const selectTodosState = (state: RootState) => state.todos;

const selectTodos = createSelector(
  selectTodosState,
  uiSelectors.selectFilters,
  ({ todoMap }, filters: UIState['filters']) => {
    return Object.values(todoMap)
      .filter(todo => {
        if (filters.filterPriority) {
          return filters.filterPriority === todo.priority ? true : false;
        }
        return true;
      })
      .filter(todo => {
        if (filters.filterStatus) {
          return filters.filterStatus === todo.status ? true : false;
        }
        return true;
      });
  },
);

export const todosSelectors = {
  selectTodos,
};
