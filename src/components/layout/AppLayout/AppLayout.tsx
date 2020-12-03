import React from 'react';
import { SEO } from '../SEO/SEO';
import { Footer, Header } from '@ui';
import { Normalize } from 'styled-normalize';
import { Box, Grommet, Main } from 'grommet';
import { theme } from '@themes';
import { graphql, useStaticQuery } from 'gatsby';

type AppLayoutProperties = {
  title: string;
};

export const AppLayout: React.FC<AppLayoutProperties> = ({
  title,
  children,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const appTitle: string = site.siteMetadata?.title;

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
      <Header title={appTitle} />
      <Main pad="large" flex overflow="auto">
        {children}
      </Main>
      <Footer title={appTitle} />
    </Grommet>
  );
};
