import { PriorityEnum, TodoStatusEnum } from '@state/todos';
import { filterSelectors } from './selectors';
import { FilterState, SortTypeEnum } from './types';

describe('filterSelectors', () => {
  describe('selectFilters', () => {
    test('should return selected filters', () => {
      const rootState = {
        filters: {
          priorities: [PriorityEnum.LOW, PriorityEnum.URGENT],
          status: [TodoStatusEnum.Active, TodoStatusEnum.Completed],
        },
        sort: {
          type: SortTypeEnum.PRIORITY,
        },
      } as FilterState;

      const result = filterSelectors.selectFilters({
        filter: rootState,
        todos: { todoMap: {} },
      });

      expect(result).toMatchInlineSnapshot(`
        Object {
          "priorities": Array [
            4,
            1,
          ],
          "status": Array [
            "Active",
            "Completed",
          ],
        }
      `);
    });
  });

  describe('selectSortType', () => {
    test('shoudl return selected sort types', () => {
      const rootState = {
        filters: {
          priorities: [PriorityEnum.LOW],
        },
        sort: {
          type: SortTypeEnum.PRIORITY,
        },
      } as FilterState;

      const result = filterSelectors.selectSortType({
        filter: rootState,
        todos: { todoMap: {} },
      });

      expect(result).toEqual(SortTypeEnum.PRIORITY);
    });
  });
});
