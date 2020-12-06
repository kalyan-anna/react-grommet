import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  appTitle: string;
  pageTitle: string;
}

export const SEO: React.FC<SEOProps> = ({ appTitle, pageTitle }) => {
  return (
    <Helmet
      title={pageTitle}
      titleTemplate={appTitle ? `%s | ${appTitle}` : undefined}
    />
  );
};
