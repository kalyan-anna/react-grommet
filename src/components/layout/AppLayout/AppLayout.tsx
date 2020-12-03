import React from 'react';
import { SEO } from '../SEO/SEO';
import { Footer, Header } from '@ui';
import { Normalize } from 'styled-normalize';
import { Box, Grommet } from 'grommet';
import { theme } from '@themes';

type AppLayoutProperties = {
  title: string;
};

export const AppLayout: React.FC<AppLayoutProperties> = ({
  title,
  children,
}) => {
  return (
    <Grommet
      theme={theme}
      full
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Normalize />
      <SEO title={title} />
      <Header />
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
      <Footer />
    </Grommet>
  );
};
