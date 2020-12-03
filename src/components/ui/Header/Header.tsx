import React from 'react';
import { Anchor, Header as GrommetHeader, Heading } from 'grommet';
import { Link } from 'gatsby';
import { Logo } from '../Logo/Logo';

const Header = () => {
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
        <Anchor
          as={Link}
          href="/"
          style={{
            textDecoration: `none`,
          }}
          color="brand"
        >
          <Logo style={{ marginRight: '10px' }} />
          <span>Do-Do</span>
        </Anchor>
      </Heading>
    </GrommetHeader>
  );
};

export { Header };
