import React from 'react';
import { Box, Button } from 'grommet';
import { Add } from 'grommet-icons';
import { NewTaskModal } from '../NewTaskModal/NewTaskModal';

export const Editor = () => {
  const [showNewTask, setShowNewTask] = React.useState(false);

  return (
    <Box width="large" align="center" justify="start">
      <Button
        icon={<Add />}
        label="Add New"
        size="medium"
        type="button"
        onClick={() => setShowNewTask(true)}
      />
      {showNewTask && <NewTaskModal onClose={() => setShowNewTask(false)} />}
    </Box>
  );
};
