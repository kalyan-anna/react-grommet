import { createSelector } from '@reduxjs/toolkit';
import { SortTypeEnum, uiSelectors, UIState } from '@state/ui';
import { RootState } from 'state/store';
import { Todo } from './types';

const selectTodosState = (state: RootState) => state.todos;

const selectTodos = createSelector(
  selectTodosState,
  uiSelectors.selectFilters,
  uiSelectors.selectSortType,
  (
    { todoMap },
    filters: UIState['filters'],
    sortType: SortTypeEnum | undefined,
  ) => {
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
      })
      .sort((a: Todo, b: Todo) => {
        if (sortType === SortTypeEnum.NAME) {
          return +(a.title > b.title) - +(a.title < b.title);
        }
        return 0;
      });
  },
);

export const todosSelectors = {
  selectTodos,
};
