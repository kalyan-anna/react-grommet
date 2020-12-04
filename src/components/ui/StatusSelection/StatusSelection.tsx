import { TodoStatusEnum } from '@state/todos';
import { Box, RadioButtonGroup } from 'grommet';
import React, { useEffect, useState } from 'react';
import upperFirst from 'lodash/upperFirst';

interface StatusSelectionProps {
  name?: string;
  value?: TodoStatusEnum;
}

const StatusSelection: React.FC<StatusSelectionProps> = ({
  name = 'status',
  value,
}) => {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  return (
    <RadioButtonGroup
      id={`${name}-radio-id`}
      name={name}
      direction="row"
      gap="small"
      options={Object.keys(TodoStatusEnum)}
      pad="small"
      value={innerValue}
      onChange={(event: any) => setInnerValue(event.target.value)}
    >
      {(option: TodoStatusEnum, { hover }: { hover: boolean }) => {
        const status = upperFirst(TodoStatusEnum[option].toLowerCase());
        let background;
        if (option === innerValue) background = 'brand';
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
