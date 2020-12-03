import { AppLayout } from '@layout';
import React from 'react';

const Contact = () => {
  return (
    <AppLayout title="Contact">
      <h1>Contact</h1>
      <p>
        <span style={{ marginRight: '5px' }}>Contact me on</span>
        <a href="mailto: kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
      </p>
    </AppLayout>
  );
};

export default Contact;
