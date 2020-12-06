import { PriorityEnum, TodoStatusEnum } from '@state/todos';

export const FILTER_BY_STATUS = 'filter/filterByStatus';
export const FILTER_BY_PRIORITY = 'filter/filterByPriority';
export const CLEAR_FILTERS = 'filter/clearFilters';
export const SORT_BY_NAME = 'filter/sortByName';
export const SORT_BY_PRIORITY = 'filter/sortByPriority';

export enum SortTypeEnum {
  NAME = 'Name',
  PRIORITY = 'PRIORITY',
}

export interface FilterState {
  filters: {
    status?: TodoStatusEnum[];
    priorities?: PriorityEnum[];
  };
  sort: {
    type?: SortTypeEnum;
  };
}
