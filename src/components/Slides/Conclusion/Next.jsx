// @flow
import PropTypes from 'prop-types';
import React from 'react';
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

const Next = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>{'What I will be doing next'}</Heading>

    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ListItem>{'Creating a Sails/Babel/React boilerplate'}</ListItem>
      <ListItem>{'Work with Electron'}</ListItem>
      <ListItem>{'Contributing more to open source'}</ListItem>
      <ListItem>{'Interning at Google, September 2018'}</ListItem>
    </List>
  </Slide>
);

Next.displayName = 'Next';

Next.propTypes = {};

Next.defaultProps = {};

export default Next;
