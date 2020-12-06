import React from 'react';
import { SEO } from '../SEO/SEO';
import { Footer, Header } from '@ui';
import { Grommet, Main } from 'grommet';
import { theme } from '@themes';
import { graphql, useStaticQuery } from 'gatsby';
import '../../../themes/global.css';

type AppLayoutProperties = {
  pageTitle: string;
};

export const AppLayout: React.FC<AppLayoutProperties> = ({
  pageTitle,
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <SEO pageTitle={pageTitle} appTitle={appTitle} />
      <Header appTitle={appTitle} />
      <Main pad="small" flex="grow">
        {children}
      </Main>
      <Footer appTitle={appTitle} />
    </Grommet>
  );
};
