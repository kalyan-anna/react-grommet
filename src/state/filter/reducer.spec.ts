import { PriorityEnum, TodoStatusEnum } from '@state/todos';
import {
  clearFilters,
  filterByPriority,
  filterByStatus,
  sortByName,
  sortByPriority,
} from './actions';
import { filterReducer } from './reducer';
import { FilterState, SortTypeEnum } from './types';

describe('filterReducer', () => {
  test('should return the inital state', () => {
    const result = filterReducer(undefined, { type: 'Unknown' });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "filters": Object {},
        "sort": Object {},
      }
    `);
  });

  describe('filterByStatus', () => {
    test('should save single selection', () => {
      const { filters } = filterReducer(
        undefined,
        filterByStatus([TodoStatusEnum.Active]),
      );
      expect(filters.status).toEqual([TodoStatusEnum.Active]);
    });

    test('should save multiple selection', () => {
      const { filters } = filterReducer(
        undefined,
        filterByStatus([TodoStatusEnum.Active, TodoStatusEnum.Completed]),
      );
      expect(filters.status).toEqual([
        TodoStatusEnum.Active,
        TodoStatusEnum.Completed,
      ]);
    });
  });

  describe('filterByPriority', () => {
    test('should save single selection', () => {
      const { filters } = filterReducer(
        undefined,
        filterByPriority([PriorityEnum.LOW]),
      );
      expect(filters.priorities).toEqual([PriorityEnum.LOW]);
    });

    test('should save multiple selection', () => {
      const { filters } = filterReducer(
        undefined,
        filterByPriority([PriorityEnum.LOW, PriorityEnum.URGENT]),
      );
      expect(filters.priorities).toEqual([
        PriorityEnum.LOW,
        PriorityEnum.URGENT,
      ]);
    });
  });

  describe('clearFilters', () => {
    test('should clear existing filter selections', () => {
      const rootState = {
        filters: {
          priorities: [PriorityEnum.URGENT, PriorityEnum.LOW],
          status: [TodoStatusEnum.Completed],
        },
        sort: {
          type: SortTypeEnum.NAME,
        },
      } as FilterState;
      const result = filterReducer(rootState, clearFilters());
      expect(result).toMatchInlineSnapshot(`
        Object {
          "filters": Object {},
          "sort": Object {
            "type": "Name",
          },
        }
      `);
    });
  });

  describe('sorting', () => {
    test('should save sortByName selection', () => {
      const { sort } = filterReducer(undefined, sortByName());
      expect(sort.type).toEqual(SortTypeEnum.NAME);
    });

    test('should save sortByPriority selection', () => {
      const { sort } = filterReducer(undefined, sortByPriority());
      expect(sort.type).toEqual(SortTypeEnum.PRIORITY);
    });

    test('should override previous selection', () => {
      const rootState = {
        filters: {},
        sort: {
          type: SortTypeEnum.PRIORITY,
        },
      } as FilterState;
      const { sort } = filterReducer(rootState, sortByName());
      expect(sort.type).toEqual(SortTypeEnum.NAME);
    });
  });
});
