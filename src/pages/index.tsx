import { Editor } from '@todo';
import React from 'react';
import { AppLayout } from '@layout';

const IndexPage = () => (
  <AppLayout pageTitle="Home">
    <Editor />
  </AppLayout>
);

export default IndexPage;
