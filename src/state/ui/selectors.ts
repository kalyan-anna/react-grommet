import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

const selectUIState = (state: RootState) => state.ui;

const selectFilters = createSelector(
  selectUIState,
  ({ filters: filter }) => filter,
);

export const uiSelectors = {
  selectFilters,
};
