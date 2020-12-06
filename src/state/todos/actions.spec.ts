import {
  addTodoItem,
  deleteTodoItem,
  toggleTodoStatus,
  updateTodoItem,
} from './actions';
import { advanceTo, clear } from 'jest-date-mock';
import uniqueId from 'lodash/uniqueId';
import { PriorityEnum, Todo, TodoStatusEnum } from './types';

jest.mock('lodash/uniqueId');
const mockedUniqueId = uniqueId as jest.Mock;

describe('todo actions', () => {
  beforeAll(() => {
    advanceTo(new Date(2020, 11, 27, 0, 0, 0));
  });

  beforeEach(() => {
    mockedUniqueId.mockReturnValue('1');
  });

  afterAll(() => {
    clear();
  });

  describe('addItem', () => {
    test('should create action', () => {
      const { payload } = addTodoItem({
        title: 'Buy milk',
        description: 'urgent',
        priority: PriorityEnum.MEDIUM,
      } as Todo);

      expect(payload).toMatchInlineSnapshot(`
        Object {
          "createdAt": "2020-12-26T13:00:00.000Z",
          "description": "urgent",
          "id": "1",
          "priority": 3,
          "status": "Active",
          "title": "Buy milk",
        }
      `);
    });

    test('should create action with default value', () => {
      const { payload } = addTodoItem({ title: 'Buy milk' });

      expect(payload).toMatchInlineSnapshot(`
        Object {
          "createdAt": "2020-12-26T13:00:00.000Z",
          "id": "1",
          "priority": 4,
          "status": "Active",
          "title": "Buy milk",
        }
      `);
    });

    test('should have status Active', () => {
      const { payload } = addTodoItem({
        title: 'Buy milk',
        status: TodoStatusEnum.Completed,
      } as Todo);

      expect(payload.status).toEqual(TodoStatusEnum.Active);
    });
  });

  test('should create deleteItem action', () => {
    const result = deleteTodoItem('1');
    expect(result).toMatchInlineSnapshot(`
      Object {
        "payload": "1",
        "type": "todos/deleteItem",
      }
    `);
  });

  test('should create updateItem action', () => {
    const result = updateTodoItem({
      id: '1',
      title: 'Run 2km',
      priority: PriorityEnum.LOW,
    } as Todo);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "payload": Object {
          "id": "1",
          "priority": 4,
          "title": "Run 2km",
        },
        "type": "todos/updateItem",
      }
    `);
  });

  test('should create toggleStatus action', () => {
    const result = toggleTodoStatus('1');
    expect(result).toMatchInlineSnapshot(`
      Object {
        "payload": "1",
        "type": "todos/toggleStatus",
      }
    `);
  });
});
