import { PriorityEnum, TodoStatusEnum } from '@state/todos';
import {
  clearFilters,
  filterByPriority,
  filterByStatus,
  sortByName,
  sortByPriority,
} from './actions';

describe('filter actions', () => {
  describe('filterByStatus', () => {
    test('should create action for single status', () => {
      expect(filterByStatus([TodoStatusEnum.Active])).toMatchInlineSnapshot(`
        Object {
          "payload": Array [
            "Active",
          ],
          "type": "filter/filterByStatus",
        }
      `);
    });

    test('should create action for multiple status', () => {
      expect(filterByStatus([TodoStatusEnum.Active, TodoStatusEnum.Completed]))
        .toMatchInlineSnapshot(`
        Object {
          "payload": Array [
            "Active",
            "Completed",
          ],
          "type": "filter/filterByStatus",
        }
      `);
    });
  });

  describe('filterByPriority', () => {
    test('should create action for single priority', () => {
      expect(filterByPriority([PriorityEnum.URGENT])).toMatchInlineSnapshot(`
        Object {
          "payload": Array [
            4,
          ],
          "type": "filter/filterByPriority",
        }
      `);
    });

    test('should create action for multiple priorities', () => {
      expect(filterByPriority([PriorityEnum.URGENT, PriorityEnum.LOW]))
        .toMatchInlineSnapshot(`
        Object {
          "payload": Array [
            4,
            1,
          ],
          "type": "filter/filterByPriority",
        }
      `);
    });
  });

  test('should create clearFilters action', () => {
    expect(clearFilters()).toMatchInlineSnapshot(`
      Object {
        "payload": undefined,
        "type": "filter/clearFilters",
      }
    `);
  });

  describe('sorting', () => {
    test('should create sortByName action', () => {
      expect(sortByName()).toMatchInlineSnapshot(`
          Object {
            "payload": undefined,
            "type": "filter/sortByName",
          }
        `);
    });

    test('should create sortByPriority action', () => {
      expect(sortByPriority()).toMatchInlineSnapshot(`
        Object {
          "payload": undefined,
          "type": "filter/sortByPriority",
        }
      `);
    });
  });
});
