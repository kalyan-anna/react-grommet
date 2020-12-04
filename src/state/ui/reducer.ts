import { createReducer } from '@reduxjs/toolkit';
import { clearFilters, filterByPriority, filterByStatus } from './actions';
import { UIState } from './types';

const initialState: UIState = {
  filters: {},
};

export const uiReducer = createReducer<UIState>(initialState, builder => {
  builder
    .addCase(filterByStatus, (state, { payload }) => {
      state.filters.status = payload;
    })
    .addCase(filterByPriority, (state, { payload }) => {
      state.filters.priority = payload;
    })
    .addCase(clearFilters, state => {
      state.filters = initialState.filters;
    });
});
