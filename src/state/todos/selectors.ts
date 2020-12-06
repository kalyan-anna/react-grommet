import { createSelector } from '@reduxjs/toolkit';
import { SortTypeEnum, filterSelectors } from '@state/filter';
import { RootState } from 'state/store';
import { Todo } from './types';

const selectTodosState = (state: RootState) => state.todos;

const selectAllTodos = createSelector(
  selectTodosState,
  filterSelectors.selectSortType,
  ({ todoMap }, sortType: SortTypeEnum | undefined) => {
    return Object.values(todoMap).sort((a: Todo, b: Todo) => {
      if (sortType === SortTypeEnum.NAME) {
        return +(a.title > b.title) - +(a.title < b.title);
      }
      return 0;
    });
  },
);

export const todosSelectors = {
  selectAllTodos,
};
