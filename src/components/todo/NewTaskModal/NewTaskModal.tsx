import { addTodoItem } from '@state/todos';
import { PrioritySelection } from '@ui';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormField,
  Heading,
  Layer,
  TextInput,
} from 'grommet';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

interface NewTaskModalProps {
  onClose: () => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ onClose }) => {
  const [value, setValue] = useState({ title: '', priority: undefined });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodoItem({ title: value.title, priority: value.priority }));
    onClose();
  };

  return (
    <Layer onEsc={onClose} onClickOutside={onClose} modal={true}>
      <Card
        background="light-2"
        pad="small"
        border={{ color: 'brand', size: 'medium' }}
      >
        <Form
          value={value}
          onChange={(nextValue: any) => setValue(nextValue)}
          onSubmit={() => handleSubmit()}
          validate="blur"
        >
          <CardHeader pad="medium" justify="center">
            <Heading margin="none" level="3" color="brand">
              New Task
            </Heading>
          </CardHeader>
          <CardBody pad="medium">
            <FormField
              name="title"
              htmlFor="title-input-id"
              label="Title"
              required
            >
              <TextInput id="title-input-id" name="title" />
            </FormField>
            <PrioritySelection />
          </CardBody>
          <CardFooter
            pad={{ horizontal: 'small' }}
            background="light-2"
            justify="center"
            margin="xsmall"
          >
            <Button type="submit" primary label="Save" color="dark-1" />
            <Button
              type="submit"
              label="Cancel"
              secondary
              onClick={onClose}
              color="dark-1"
            />
          </CardFooter>
        </Form>
      </Card>
    </Layer>
  );
};

export { NewTaskModal };
