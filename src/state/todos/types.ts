export const ADD_ITEM = 'todos/addItem';
export const DELETE_ITEM = 'todos/deleteItem';
export const UPDATE_ITEM = 'todos/updateItem';
export const TOGGLE_STATUS = 'todos/toggleStatus';

export enum PriorityEnum {
  URGENT = 4,
  HIGH = 3,
  MEDIUM = 2,
  LOW = 1,
}

export enum TodoStatusEnum {
  Active = 'Active',
  Completed = 'Completed',
}

export interface Todo {
  id?: string;
  title: string;
  description?: string;
  priority?: PriorityEnum;
  createdAt?: string;
  status?: TodoStatusEnum;
}

export interface TodosState {
  todoMap: {
    [id: string]: Todo;
  };
}
