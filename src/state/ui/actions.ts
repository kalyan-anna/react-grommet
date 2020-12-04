import { createAction } from '@reduxjs/toolkit';
import { PriorityEnum, TodoStatusEnum } from '@state/todos';
import { CLEAR_FILTERS, FILTER_BY_PRIORITY, FILTER_BY_STATUS } from './types';

export const filterByStatus = createAction<TodoStatusEnum>(FILTER_BY_STATUS);

export const filterByPriority = createAction<PriorityEnum>(FILTER_BY_PRIORITY);

export const clearFilters = createAction(CLEAR_FILTERS);
