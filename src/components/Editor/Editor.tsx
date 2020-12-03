import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoItem,
  deleteTodoItem,
  todosSelectors,
  toggleItemStatus,
} from '@state/todos';

export const Editor = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.selectTodos);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTitle('');
    dispatch(addTodoItem({ title }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodoItem(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggleItemStatus(id));
  };

  return (
    <section>
      <p>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={event => setTitle(event.target.value)}
            value={title}
          />
          <button type="submit">Add Item</button>
        </form>
      </p>
      <p>
        <h2>Todo List</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span onClick={() => handleToggle(todo.id!)}>{todo.title}</span>
              <button type="button" onClick={() => handleDelete(todo.id!)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </p>
    </section>
  );
};
