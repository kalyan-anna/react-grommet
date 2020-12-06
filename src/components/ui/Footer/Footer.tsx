import React from 'react';
import { Box, Footer as GommetFooter, Nav, Text } from 'grommet';
import { Logo } from '../Logo/Logo';
import { AnchorLink } from '../AnchorLink/AnchorLink';

interface FooterProps {
  appTitle: string;
}

const FooterContent = () => {
  return (
    <Nav direction="row" pad="medium">
      <AnchorLink to="/contact" label="Contact" color="brand"></AnchorLink>
      <AnchorLink to="/about" label="About" color="brand"></AnchorLink>
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
