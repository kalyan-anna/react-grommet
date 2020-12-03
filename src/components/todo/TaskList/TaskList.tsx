import { Todo, todosSelectors } from '@state/todos';
import { Box, Text } from 'grommet';
import React from 'react';
import { useSelector } from 'react-redux';
import { TaskListItem } from './TaskListItem';

const TaskList = () => {
  const todos: Todo[] = useSelector(todosSelectors.selectTodos);

  const list = todos.length > 0 && (
    <ol>
      {todos.map(todo => (
        <li key={todo.id} style={{ margin: '10px 0' }}>
          <TaskListItem todo={todo} />
        </li>
      ))}
    </ol>
  );

  const noTaskMessage = todos.length == 0 && (
    <Text
      color="status-warning"
      weight="bold"
      alignSelf="center"
      margin="small"
    >
      No tasks to show
    </Text>
  );

  console.log(list);
  return (
    <Box direction="column" width="medium" margin="small">
      {noTaskMessage}
      {list}
    </Box>
  );
};

export { TaskList };
