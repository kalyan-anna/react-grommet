import { AppLayout } from '@layout';
import { Box, Heading } from 'grommet';
import React from 'react';

const Contact = () => {
  return (
    <AppLayout pageTitle="Contact">
      <Box pad="large">
        <Heading margin="small">Contact</Heading>
        <p>
          <span style={{ marginRight: '5px' }}>Contact me on</span>
          <a href="mailto: kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
        </p>
      </Box>
    </AppLayout>
  );
};

export default Contact;
