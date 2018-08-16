// @flow
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

const scopedExample = `\`\`\`json
//package.json
{
  "name": "@nutanix/raft"
}
\`\`\``;

const ScopedPackages = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>{'Scoped Packages'}</Heading>
    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ReactMarkdown
        source={scopedExample}
        className={'markdown-body markdown-custom'}
      />
      <br />
      <ListItem>{'Utilize multiple registries'}</ListItem>
    </List>
  </Slide>
);

ScopedPackages.displayName = 'ScopedPackages';

ScopedPackages.propTypes = {};

ScopedPackages.defaultProps = {};

export default ScopedPackages;
