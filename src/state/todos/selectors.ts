import { createSelector } from '@reduxjs/toolkit';
import { SortTypeEnum, filterSelectors } from '@state/filter';
import { RootState } from 'state/store';
import { PriorityEnum, Todo, TodoStatusEnum } from './types';
import sortBy from 'lodash/sortBy';

const selectTodosState = (state: RootState) => state.todos;

const filterTodos = (
  todos: Todo[],
  filterPriorities?: PriorityEnum[],
  filterStatus?: TodoStatusEnum[],
) => {
  return todos.filter(todo => {
    if (filterPriorities && !filterPriorities.includes(todo.priority!)) {
      return false;
    }
    if (filterStatus && !filterStatus.includes(todo.status!)) {
      return false;
    }
    return true;
  });
};

const selectAllTodos = createSelector(
  selectTodosState,
  filterSelectors.selectFilters,
  filterSelectors.selectSortType,
  ({ todoMap }, filters, sortType: SortTypeEnum | undefined) => {
    let todoArr = Object.values(todoMap);
    if (filters.priorities || filters.status) {
      todoArr = filterTodos(todoArr, filters.priorities, filters.status);
    }

    if (sortType) {
      return sortBy(todoArr, [
        sortType === SortTypeEnum.NAME && 'title',
        sortType === SortTypeEnum.PRIORITY && 'priority',
      ]) as Todo[];
    }
    return todoArr;
  },
);

export const todosSelectors = {
  selectAllTodos,
};
