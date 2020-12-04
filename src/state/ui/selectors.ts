import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

const selectUIState = (state: RootState) => state.ui;

const selectFilters = createSelector(selectUIState, ({ filters }) => filters);

const selectSortType = createSelector(selectUIState, ({ sort }) => sort.type);

export const uiSelectors = {
  selectFilters,
  selectSortType,
};
