import { createReducer } from '@reduxjs/toolkit';
import {
  clearFilters,
  filterByPriority,
  filterByStatus,
  sortByName,
  sortByPriority,
} from './actions';
import { FilterState, SortTypeEnum } from './types';

const initialState: FilterState = {
  filters: {},
  sort: {},
};

export const filterReducer = createReducer<FilterState>(
  initialState,
  builder => {
    builder
      .addCase(filterByStatus, (state, { payload }) => {
        state.filters.status = payload;
      })
      .addCase(filterByPriority, (state, { payload }) => {
        state.filters.priorities = payload;
      })
      .addCase(clearFilters, state => {
        state.filters = initialState.filters;
      })
      .addCase(sortByName, state => {
        state.sort.type = SortTypeEnum.NAME;
      })
      .addCase(sortByPriority, state => {
        state.sort.type = SortTypeEnum.PRIORITY;
      });
  },
);
