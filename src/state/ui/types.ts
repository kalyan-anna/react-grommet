import { PriorityEnum, TodoStatusEnum } from '@state/todos';

export interface UIState {
  filter: {
    status: TodoStatusEnum;
    priority: PriorityEnum;
  };
}
