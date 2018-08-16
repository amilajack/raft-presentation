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
import YarnLogo from './Logos/YarnLogo';

const Yarn = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <YarnLogo width={null} height={'200px'} />
    <List textColor={'body'}>
      <ListItem>{'Faster than NPM'}</ListItem>
      <ListItem>{'Commonly used by node developers today'}</ListItem>
      <ListItem>{'Natively supports monorepos'}</ListItem>
      <ListItem>{'More exclusive features'}</ListItem>
    </List>
  </Slide>
);

Yarn.displayName = 'Yarn';

Yarn.propTypes = {};

Yarn.defaultProps = {};

export default Yarn;
