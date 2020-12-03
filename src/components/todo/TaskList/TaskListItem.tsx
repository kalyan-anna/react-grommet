import {
  deleteTodoItem,
  Todo,
  TodoStatusEnum,
  toggleItemStatus,
} from '@state/todos';
import { Button, Card, CardBody, CardFooter, CheckBox, Text } from 'grommet';
import React from 'react';
import { Trash } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const FormattedText = styled.span`
  text-decoration: ${props => {
    console.log('props:', props);
    return props.status === TodoStatusEnum.Completed ? 'line-through' : '';
  }};
`;

interface TaskListItemProps {
  todo: Todo;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoItem(todo.id!));
  };

  const handleToggle = () => {
    dispatch(toggleItemStatus(todo.id!));
  };

  return (
    <Card background="light-2">
      <CardBody border={{ color: 'border', size: 'xsmall', side: 'bottom' }}>
        <Text color="brand" weight="bold" style={{ padding: '10px 10px' }}>
          <FormattedText status={todo.status}>{todo.title}</FormattedText>
        </Text>
      </CardBody>
      <CardFooter>
        <CheckBox
          name="toggle"
          toggle
          checked={todo.status === TodoStatusEnum.Completed}
          label="Completed"
          onChange={handleToggle}
          reverse={true}
        />
        <Button
          icon={<Trash color="black" />}
          size="small"
          onClick={handleDelete}
          hoverIndicator={true}
        />
      </CardFooter>
    </Card>
  );
};

export { TaskListItem };
