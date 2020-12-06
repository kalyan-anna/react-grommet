import { Todo, todosSelectors } from '@state/todos';
import { sortByName } from '@state/filter';
import { Box, Button } from 'grommet';
import { Sort } from 'grommet-icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SortPanel = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(todosSelectors.selectAllTodos);

  const handleSortByName = () => {
    dispatch(sortByName());
  };

  return (
    <Box align="center" pad="small" gap="small" direction="row">
      <Button
        icon={<Sort />}
        label="Sort by Name"
        size="small"
        type="button"
        disabled={todos.length === 0}
        onClick={handleSortByName}
      />
      <Button
        icon={<Sort />}
        label="Sort by Priority"
        size="small"
        disabled={true}
      />
    </Box>
  );
};

export { SortPanel };
