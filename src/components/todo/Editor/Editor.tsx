import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Add } from 'grommet-icons';
import { NewTaskModal } from '../NewTaskModal/NewTaskModal';
import { TaskList } from '../TaskList/TaskList';

export const Editor = () => {
  const [showNewTask, setShowNewTask] = React.useState(false);

  return (
    <Box align="center" justify="center">
      <Heading size="small" level={2} textAlign="start">
        Today&apos;s Task
      </Heading>
      <TaskList />
      <Button
        icon={<Add />}
        label="Add New Task"
        size="medium"
        type="button"
        onClick={() => setShowNewTask(true)}
        margin="medium"
      />
      {showNewTask && <NewTaskModal onClose={() => setShowNewTask(false)} />}
    </Box>
  );
};