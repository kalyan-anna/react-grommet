import { createAction, nanoid } from '@reduxjs/toolkit';
import {
  ADD_ITEM,
  DELETE_ITEM,
  Todo,
  TodoStatusEnum,
  TOGGLE_STATUS,
  UPDATE_ITEM,
  PriorityEnum,
} from './types';

export const addTodoItem = createAction(ADD_ITEM, (todo: Todo) => ({
  payload: {
    ...todo,
    id: nanoid(),
    createdAt: new Date().toISOString(),
    status: TodoStatusEnum.Active,
    priority: todo.priority || PriorityEnum.LOW,
  } as Todo,
}));

export const deleteTodoItem = createAction<string>(DELETE_ITEM);

export const updateTodoItem = createAction<Todo>(UPDATE_ITEM);

export const toggleItemStatus = createAction<string>(TOGGLE_STATUS);
