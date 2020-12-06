import { createAction } from '@reduxjs/toolkit';
import { PriorityEnum, TodoStatusEnum } from '@state/todos';
import {
  CLEAR_FILTERS,
  FILTER_BY_PRIORITY,
  FILTER_BY_STATUS,
  SORT_BY_NAME,
  SORT_BY_PRIORITY,
} from './types';

export const filterByStatus = createAction<TodoStatusEnum[]>(FILTER_BY_STATUS);

export const filterByPriority = createAction<PriorityEnum[]>(
  FILTER_BY_PRIORITY,
);

export const clearFilters = createAction(CLEAR_FILTERS);

export const sortByName = createAction(SORT_BY_NAME);

export const sortByPriority = createAction(SORT_BY_PRIORITY);
