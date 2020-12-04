import { PriorityEnum, TodoStatusEnum } from '@state/todos';

export const FILTER_BY_STATUS = 'ui/filterByStatus';
export const FILTER_BY_PRIORITY = 'ui/filterByPriority';
export const CLEAR_FILTERS = 'ui/clearFilters';
export const SORT_TODOS = 'ui/sortTodos';

export enum SortTypeEnum {
  NAME = 'Name',
  PRIORITY = 'PRIORITY',
}

export interface UIState {
  filters: {
    filterStatus?: TodoStatusEnum;
    filterPriority?: PriorityEnum;
  };
  sort: {
    type?: SortTypeEnum;
  };
}
