import { Todo, todosSelectors } from '@state/todos';
import { Box } from 'grommet';
import React from 'react';
import { useSelector } from 'react-redux';
import { TaskListItem } from './TaskListItem';

const TaskList = () => {
  const todos: Todo[] = useSelector(todosSelectors.selectTodos);

  return (
    <Box direction="column" width="medium" margin="small">
      <ol>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <TaskListItem todo={todo} />
          </li>
        ))}
      </ol>
    </Box>
  );
};

export { TaskList };
