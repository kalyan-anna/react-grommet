import React from 'react';
import { Anchor, Header as GrommetHeader, Heading, Text } from 'grommet';
import { Logo } from '../Logo/Logo';
import { Link } from 'gatsby';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
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
            {title}
          </Text>
        </Link>
      </Heading>
    </GrommetHeader>
  );
};

export { Header };
