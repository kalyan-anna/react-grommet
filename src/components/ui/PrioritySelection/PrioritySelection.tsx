import { PriorityEnum } from '@state/todos';
import { Box, RadioButtonGroup } from 'grommet';
import React, { useEffect, useState } from 'react';
import upperFirst from 'lodash/upperFirst';
import isNaN from 'lodash/isNaN';

interface PrioritySelectionProps {
  name?: string;
  value?: PriorityEnum;
}

const PrioritySelection: React.FC<PrioritySelectionProps> = ({
  name = 'priority',
  value,
}) => {
  const [innerValue, setInnerValue] = useState(value?.valueOf());

  useEffect(() => {
    setInnerValue(value?.valueOf());
  }, [value]);

  return (
    <RadioButtonGroup
      id={`${name}-radio-id`}
      name={name}
      direction="row"
      gap="small"
      options={Object.values(PriorityEnum).filter((key: any) =>
        isNaN(Number(PriorityEnum[key])),
      )}
      pad="small"
      value={innerValue}
      onChange={(event: any) => {
        setInnerValue(event.target.value);
      }}
    >
      {(option: number, { hover }: { hover: boolean }) => {
        const priority = upperFirst(PriorityEnum[option].toLowerCase());
        let background;

        if (innerValue && innerValue.toString() === option.toString()) {
          background = 'brand';
        } else if (hover) {
          background = 'light-4';
        } else {
          background = 'light-2';
        }

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
