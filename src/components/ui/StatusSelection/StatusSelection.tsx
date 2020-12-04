import { TodoStatusEnum } from '@state/todos';
import { Box, RadioButtonGroup } from 'grommet';
import React from 'react';
import upperFirst from 'lodash/upperFirst';

const StatusSelection = () => {
  return (
    <RadioButtonGroup
      id="status-radio-id"
      name="status"
      direction="row"
      gap="small"
      options={Object.keys(TodoStatusEnum)}
      pad="small"
    >
      {(
        option: TodoStatusEnum,
        { checked, hover }: { checked: boolean; hover: boolean },
      ) => {
        const status = upperFirst(TodoStatusEnum[option].toLowerCase());
        let background;
        if (checked) background = 'brand';
        else if (hover) background = 'light-4';
        else background = 'light-2';
        return (
          <Box background={background} pad="xsmall" round={true}>
            {status}
          </Box>
        );
      }}
    </RadioButtonGroup>
  );
};

export { StatusSelection };
