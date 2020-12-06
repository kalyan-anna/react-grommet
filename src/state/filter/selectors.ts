import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

const selectFilterState = (state: RootState) => state.filter;

const selectFilters = createSelector(
  selectFilterState,
  ({ filters }) => filters,
);

const selectSortType = createSelector(
  selectFilterState,
  ({ sort }) => sort.type,
);

export const filterSelectors = {
  selectFilters,
  selectSortType,
};
