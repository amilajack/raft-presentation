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
import YarnLogo from './YarnLogo';

const Yarn = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <YarnLogo width={null} height={'200px'} />
    <List textColor={'body'} style={{ whiteSpace: 'nowrap' }}>
      <ListItem>{"SJSU President's list - 4.0 GPA for 2017"}</ListItem>
      <ListItem>{'First hackathon - UCSB Jan 2018'}</ListItem>
    </List>
  </Slide>
);

Yarn.displayName = 'Yarn';

Yarn.propTypes = {};

Yarn.defaultProps = {};

export default Yarn;
