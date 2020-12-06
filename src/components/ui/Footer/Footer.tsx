import React from 'react';
import {
  Anchor,
  Box,
  Button,
  Footer as GommetFooter,
  Nav,
  Text,
} from 'grommet';
import { Logo } from '../Logo/Logo';
import { Link } from 'gatsby';

interface FooterProps {
  appTitle: string;
}

const FooterContent = () => {
  return (
    <Nav direction="row" pad="medium">
      <Button
        as={Link}
        to="/contact"
        label="Contact"
        plain={true}
        color="brand"
        hoverIndicator={true}
      ></Button>
      <Button
        as={Link}
        to="/about"
        label="About"
        plain={true}
        color="brand"
        hoverIndicator={true}
      ></Button>
    </Nav>
  );
};

const Footer: React.FC<FooterProps> = ({ appTitle: title }) => {
  return (
    <>
      <GommetFooter background="dark-1" pad="small">
        <FooterContent />
      </GommetFooter>
      <GommetFooter
        background="dark-2"
        pad={{ horizontal: 'large', vertical: 'small' }}
      >
        <Box direction="row-responsive" gap="small">
          <Logo />
          <Text alignSelf="center" color="brand">
            {title}
          </Text>
        </Box>
        <Text textAlign="center" size="small">
          © 2020 Copyright
        </Text>
      </GommetFooter>
    </>
  );
};

export { Footer };
