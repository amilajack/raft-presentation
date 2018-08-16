// @flow
import PropTypes from 'prop-types';
import React from 'react';
// import GridLayout from 'react-grid-layout';
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
import LernaLogo from './Logos/LernaLogo';

const Yarn = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <LernaLogo width={null} height={'300px'} />
    <List textColor={'body'}>
      <ListItem>{'Manages monorepos'}</ListItem>
      <ListItem>{'Supports NPM or Yarn'}</ListItem>
      <ListItem>{'Can work in conjunction with Yarn workspaces'}</ListItem>
    </List>
  </Slide>
);

Yarn.displayName = 'Yarn';

Yarn.propTypes = {};

Yarn.defaultProps = {};

export default Yarn;
