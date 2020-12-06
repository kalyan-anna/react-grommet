import { filterReducer } from '@state/filter';
import { addTodoItem } from './actions';
import { todosReducer } from './reducer';
import { todosSelectors } from './selectors';

describe('todosSelectors', () => {
  describe('selectAllTodos', () => {
    test('should return empty array when no items added', () => {
      const nextTodosState = todosReducer(undefined, { type: 'Unknown' });
      const nextFilterState = filterReducer(undefined, { type: 'Unknown' });
      const result = todosSelectors.selectAllTodos({
        todos: nextTodosState,
        filter: nextFilterState,
      });

      expect(result).toHaveLength(0);
    });

    test('should return all todo items as an array', () => {
      let nextTodosState = todosReducer(
        undefined,
        addTodoItem({ title: 'Buy milk' }),
      );
      nextTodosState = todosReducer(
        nextTodosState,
        addTodoItem({ title: 'Run 2km' }),
      );
      const nextFilterState = filterReducer(undefined, { type: 'Unknown' });

      const result = todosSelectors.selectAllTodos({
        todos: nextTodosState,
        filter: nextFilterState,
      });

      expect(result).toHaveLength(2);
    });
  });
});
