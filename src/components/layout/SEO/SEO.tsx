import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function SEO({ title }: { title: string }) {
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
    <Helmet
      title={title}
      titleTemplate={appTitle ? `%s | ${appTitle}` : undefined}
    />
  );
}
