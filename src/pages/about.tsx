import { AppLayout } from '@layout';
import React from 'react';

const About = () => {
  return (
    <AppLayout title="About">
      <h1>About</h1>
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
    </AppLayout>
  );
};

export default About;
