import { PriorityEnum } from '@state/todos';
import { Box, RadioButtonGroup } from 'grommet';
import React from 'react';
import upperFirst from 'lodash/upperFirst';
import isNaN from 'lodash/isNaN';

const PrioritySelection = () => {
  return (
    <RadioButtonGroup
      id="priority-radio-id"
      name="priority"
      direction="row"
      gap="small"
      options={Object.values(PriorityEnum).filter((key: any) =>
        isNaN(Number(PriorityEnum[key])),
      )}
      pad="small"
    >
      {(
        option: number,
        { checked, hover }: { checked: boolean; hover: boolean },
      ) => {
        const priority = upperFirst(PriorityEnum[option].toLowerCase());
        let background;
        if (checked) background = 'brand';
        else if (hover) background = 'light-4';
        else background = 'light-2';
        return (
          <Box background={background} pad="xsmall" round={true}>
            {priority}
          </Box>
        );
      }}
    </RadioButtonGroup>
  );
};

export { PrioritySelection };
