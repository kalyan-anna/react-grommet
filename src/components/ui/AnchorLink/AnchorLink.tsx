import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import { Anchor, AnchorProps } from 'grommet';

type AnchorLinkProps = GatsbyLinkProps<any> &
  AnchorProps &
  Omit<JSX.IntrinsicElements['a'], 'color'>;

const AnchorLink: React.FC<AnchorLinkProps> = props => {
  return <Anchor as={Link} {...props} />;
};

export { AnchorLink };
