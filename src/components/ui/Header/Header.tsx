import React from 'react';
import { Anchor, Header as GrommetHeader, Heading } from 'grommet';
import { Logo } from '../Logo/Logo';

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
        <Anchor
          href="/"
          style={{
            textDecoration: `none`,
          }}
          color="brand"
        >
          <Logo style={{ marginRight: '10px' }} />
          <span>{title}</span>
        </Anchor>
      </Heading>
    </GrommetHeader>
  );
};

export { Header };
