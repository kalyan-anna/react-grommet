import { AppLayout } from '@layout';
import { Box, Heading } from 'grommet';
import React from 'react';

const About = () => {
  return (
    <AppLayout pageTitle="About">
      <Box pad="large">
        <Heading margin="small">About</Heading>
        <div>
          <div>To-do app built using following frameworks</div>
          <ul>
            <li>Gatsby</li>
            <li>React</li>
            <li>Typescript</li>
            <li>styled-component</li>
            <li>Redux</li>
          </ul>
        </div>
      </Box>
    </AppLayout>
  );
};

export default About;
