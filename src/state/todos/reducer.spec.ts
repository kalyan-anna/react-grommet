/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/no-duplicate-string */
import {
  addTodoItem,
  deleteTodoItem,
  toggleTodoStatus,
  updateTodoItem,
} from './actions';
import { todosReducer } from './reducer';
import { PriorityEnum, Todo, TodosState, TodoStatusEnum } from './types';
import uniqueId from 'lodash/uniqueId';
import { advanceTo, clear } from 'jest-date-mock';

jest.mock('lodash/uniqueId');
const mockedUniqueId = uniqueId as jest.Mock;

beforeAll(() => {
  advanceTo(new Date(2020, 11, 27, 0, 0, 0));
  mockedUniqueId.mockReturnValue('1');
});

afterAll(() => {
  clear();
});

describe('todos reducer', () => {
  test('should return the initial state', () => {
    expect(todosReducer(undefined, { type: 'Unknown' })).toMatchInlineSnapshot(`
      Object {
        "todoMap": Object {},
      }
    `);
  });

  describe('addItem action', () => {
    test('should add item to empty list', () => {
      const addItemAction = addTodoItem({ title: 'Buy milk' });
      const { todoMap } = todosReducer(undefined, addItemAction);

      expect(Object.keys(todoMap)).toHaveLength(1);
      expect(todoMap).toMatchInlineSnapshot(`
        Object {
          "1": Object {
            "createdAt": "2020-12-26T13:00:00.000Z",
            "id": "1",
            "priority": 1,
            "status": "Active",
            "title": "Buy milk",
          },
        }
      `);
    });

    test('should add item to existing list', () => {
      const rootState = {
        todoMap: {
          '1': {
            createdAt: '2020-12-06T09:05:33.065Z',
            id: '1',
            priority: PriorityEnum.LOW,
            status: TodoStatusEnum.Active,
            title: 'Buy milk',
          } as Todo,
        },
      } as TodosState;

      mockedUniqueId.mockReturnValue('2');
      const addItemAction = addTodoItem({ title: 'Run 2 km' });

      const { todoMap } = todosReducer(rootState, addItemAction);
      expect(Object.keys(todoMap)).toHaveLength(2);
      expect(todoMap['1'].title).toEqual('Buy milk');
      expect(todoMap['2'].title).toEqual('Run 2 km');
    });
  });

  describe('deleteItem action', () => {
    test('should delete item from the list', () => {
      const rootState = {
        todoMap: {
          '1': {
            createdAt: '2020-12-06T09:05:33.065Z',
            id: '1',
            priority: PriorityEnum.LOW,
            status: TodoStatusEnum.Active,
            title: 'Buy milk',
          } as Todo,
          '2': {
            createdAt: '2020-12-06T09:05:33.065Z',
            id: '2',
            priority: PriorityEnum.LOW,
            status: TodoStatusEnum.Active,
            title: 'Run 2km',
          } as Todo,
        },
      } as TodosState;

      const deleteAction = deleteTodoItem('2');
      const { todoMap } = todosReducer(rootState, deleteAction);

      expect(Object.keys(todoMap)).toHaveLength(1);
      expect(todoMap['1'].title).toEqual('Buy milk');
    });

    test('should delete item when there is only 1 item', () => {
      const rootState = {
        todoMap: {
          '1': {
            createdAt: '2020-12-06T09:05:33.065Z',
            id: '1',
            priority: PriorityEnum.LOW,
            status: TodoStatusEnum.Active,
            title: 'Buy milk',
          } as Todo,
        },
      } as TodosState;

      const deleteAction = deleteTodoItem('1');
      const { todoMap } = todosReducer(rootState, deleteAction);

      expect(Object.keys(todoMap)).toHaveLength(0);
    });
  });

  describe('toggleTodoStatus action', () => {
    test('should toggle Active status to Completed', () => {
      const rootState = {
        todoMap: {
          '1': {
            createdAt: '2020-12-06T09:05:33.065Z',
            id: '1',
            priority: PriorityEnum.LOW,
            status: TodoStatusEnum.Active,
            title: 'Buy milk',
          } as Todo,
        },
      } as TodosState;

      const toggleAction = toggleTodoStatus('1');
      const { todoMap } = todosReducer(rootState, toggleAction);

      expect(todoMap['1'].status).toEqual(TodoStatusEnum.Completed);
    });

    test('should toggle Completed status to Active', () => {
      const rootState = {
        todoMap: {
          '1': {
            createdAt: '2020-12-06T09:05:33.065Z',
            id: '1',
            priority: PriorityEnum.LOW,
            status: TodoStatusEnum.Completed,
            title: 'Buy milk',
          } as Todo,
        },
      } as TodosState;

      const toggleAction = toggleTodoStatus('1');
      const { todoMap } = todosReducer(rootState, toggleAction);

      expect(todoMap['1'].status).toEqual(TodoStatusEnum.Active);
    });
  });

  describe('updateTodoItem', () => {
    test('should update item', () => {
      const rootState = {
        todoMap: {
          '1': {
            createdAt: '2020-12-06T09:05:33.065Z',
            id: '1',
            priority: PriorityEnum.LOW,
            status: TodoStatusEnum.Active,
            title: 'Buy milk',
          } as Todo,
        },
      } as TodosState;

      const updateAction = updateTodoItem({
        createdAt: '2020-12-06T09:05:33.065Z',
        id: '1',
        priority: PriorityEnum.URGENT,
        status: TodoStatusEnum.Completed,
        title: 'Buy milk 2',
      });

      const { todoMap } = todosReducer(rootState, updateAction);

      expect(todoMap['1']).toMatchInlineSnapshot(`
        Object {
          "createdAt": "2020-12-06T09:05:33.065Z",
          "id": "1",
          "priority": 4,
          "status": "Completed",
          "title": "Buy milk 2",
        }
      `);
    });
  });
});
