import { PriorityEnum, TodoStatusEnum } from '@state/todos';

export const FILTER_BY_STATUS = 'ui/filterByStatus';
export const FILTER_BY_PRIORITY = 'ui/filterByPriority';
export const CLEAR_FILTERS = 'ui/clearFilters';

export interface UIState {
  filters: {
    status?: TodoStatusEnum;
    priority?: PriorityEnum;
  };
}
