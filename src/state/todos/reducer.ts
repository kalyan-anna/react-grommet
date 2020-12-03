import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  addTodoItem,
  deleteTodoItem,
  toggleItemStatus,
  updateTodoItem,
} from './actions';
import { Todo, TodosState, TodoStatusEnum } from './types';
import omit from 'lodash/omit';

const initialState: TodosState = {
  todoMap: {},
};

const _upsert = (state: TodosState, action: PayloadAction<Todo>) => {
  state.todoMap[action.payload.id!] = action.payload;
};

const _remove = (state: TodosState, action: PayloadAction<string>) => {
  state.todoMap = omit(state.todoMap, action.payload);
};

const _toggle = (state: TodosState, { payload: id }: PayloadAction<string>) => {
  if (state.todoMap[id].status === TodoStatusEnum.Active) {
    state.todoMap[id].status = TodoStatusEnum.Completed;
  } else if (state.todoMap[id].status === TodoStatusEnum.Completed) {
    state.todoMap[id].status = TodoStatusEnum.Active;
  }
};

export const todosReducer = createReducer<TodosState>(initialState, builder => {
  builder
    .addCase(addTodoItem, _upsert)
    .addCase(deleteTodoItem, _remove)
    .addCase(updateTodoItem, _upsert)
    .addCase(toggleItemStatus, _toggle);
});
