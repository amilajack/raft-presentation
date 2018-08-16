// @flow
import PropTypes from 'prop-types';
import React from 'react';
import Highlight from 'react-highlight.js';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

const scopedExample = `//package.json
{
  "name": "@nutanix/raft"
}`;

const ScopedPackages = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>{'Scoped Packages'}</Heading>
    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <Highlight language={'jsonc'}>{scopedExample}</Highlight>
      <ListItem>{'Utilize multiple registries'}</ListItem>
    </List>
  </Slide>
);

ScopedPackages.displayName = 'ScopedPackages';

ScopedPackages.propTypes = {};

ScopedPackages.defaultProps = {};

export default ScopedPackages;
