import {
  Accordion,
  AccordionPanel,
  Box,
  Button,
  Form,
  Heading,
  Text,
  TextInput,
} from 'grommet';
import { Filter } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSelectors } from '@state/ui';
import {
  clearFilters,
  filterByPriority,
  filterByStatus,
  UIState,
} from 'state/ui';
import { PrioritySelection, StatusSelection } from '@ui';

const RichPanel = ({ children, label }: any) => {
  const [hovering, setHovering] = React.useState(false);

  const renderPanelTitle = () => (
    <Box direction="row" align="center" gap="small" pad="small">
      <Filter />
      <Heading level={4} color={hovering ? 'dark-1' : 'dark-3'}>
        {label}
      </Heading>
    </Box>
  );

  return (
    <AccordionPanel
      label={renderPanelTitle()}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
    >
      {children}
    </AccordionPanel>
  );
};

const FilterPanel = () => {
  const filterValue: UIState['filters'] = useSelector(
    uiSelectors.selectFilters,
  );
  const dispatch = useDispatch();

  const handleFilterChange = (nextValue: UIState['filters']) => {
    if (
      nextValue.filterPriority &&
      filterValue.filterPriority !== nextValue.filterPriority
    ) {
      dispatch(filterByPriority(nextValue.filterPriority));
    }
    if (
      nextValue.filterStatus &&
      filterValue.filterStatus !== nextValue.filterStatus
    ) {
      dispatch(filterByStatus(nextValue.filterStatus));
    }
  };

  const handleClear = () => {
    dispatch(clearFilters());
  };

  return (
    <Box width="medium" pad="medium">
      <Accordion multiple={false} background="light-3">
        <RichPanel label="Filters">
          <Box
            pad={{
              bottom: 'medium',
              horizontal: 'small',
              top: 'small',
            }}
            gap="medium"
          >
            <Form
              value={filterValue}
              onChange={(nextValue: any) => handleFilterChange(nextValue)}
            >
              <Text color="dark-1" margin="small" weight="bold">
                Priority
              </Text>
              <PrioritySelection
                name="filterPriority"
                value={filterValue.filterPriority}
              />
              <Text color="dark-1" margin="small" weight="bold">
                Status
              </Text>
              <StatusSelection
                name="filterStatus"
                value={filterValue.filterStatus}
              />
              <Button
                type="reset"
                label="Clear"
                secondary
                color="dark-1"
                margin="small"
                onClick={handleClear}
              />
            </Form>
          </Box>
        </RichPanel>
      </Accordion>
    </Box>
  );
};

export { FilterPanel };
