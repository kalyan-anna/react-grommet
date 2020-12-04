import { createReducer } from '@reduxjs/toolkit';
import {
  clearFilters,
  filterByPriority,
  filterByStatus,
  sortTodos,
} from './actions';
import { UIState } from './types';

const initialState: UIState = {
  filters: {},
  sort: {},
};

export const uiReducer = createReducer<UIState>(initialState, builder => {
  builder
    .addCase(filterByStatus, (state, { payload }) => {
      state.filters.filterStatus = payload;
    })
    .addCase(filterByPriority, (state, { payload }) => {
      state.filters.filterPriority = payload;
    })
    .addCase(clearFilters, state => {
      state.filters = initialState.filters;
    })
    .addCase(sortTodos, (state, { payload }) => {
      state.sort.type = payload;
    });
});
