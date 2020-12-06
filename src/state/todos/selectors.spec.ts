import { uiReducer } from '@state/ui';
import { addTodoItem } from './actions';
import { todosReducer } from './reducer';
import { todosSelectors } from './selectors';

describe('todosSelectors', () => {
  describe('selectAllTodos', () => {
    test('should return empty array when no items added', () => {
      const nextTodosState = todosReducer(undefined, { type: 'Unknown' });
      const nextFilterState = uiReducer(undefined, { type: 'Unknown' });
      const result = todosSelectors.selectAllTodos({
        todos: nextTodosState,
        ui: nextFilterState,
      });

      expect(result).toHaveLength(0);
    });

    test('should return all todo items as an array', () => {
      let nextTodosState = todosReducer(undefined, { type: 'Unknown' });
      nextTodosState = todosReducer(
        nextTodosState,
        addTodoItem({ title: 'Buy milk' }),
      );
      nextTodosState = todosReducer(
        nextTodosState,
        addTodoItem({ title: 'Run 2km' }),
      );
      const nextFilterState = uiReducer(undefined, { type: 'Unknown' });

      const result = todosSelectors.selectAllTodos({
        todos: nextTodosState,
        ui: nextFilterState,
      });

      expect(result).toHaveLength(2);
    });
  });
});
