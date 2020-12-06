import React from 'react';
import { Header as GrommetHeader, Heading, Text } from 'grommet';
import { Logo } from '../Logo/Logo';
import { Link } from 'gatsby';

interface HeaderProps {
  appTitle: string;
}

const Header: React.FC<HeaderProps> = ({ appTitle }) => {
  return (
    <GrommetHeader
      background="light-2"
      justify="start"
      border={{
        color: 'brand',
        size: 'small',
        side: 'bottom',
      }}
      height="xsmall"
      pad="medium"
    >
      <Heading size="small">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <Logo style={{ marginRight: '10px' }} />
          <Text color="brand" size="xlarge">
            {appTitle}
          </Text>
        </Link>
      </Heading>
    </GrommetHeader>
  );
};

export { Header };
