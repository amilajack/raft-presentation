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

const Introduction = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>Introduction</Heading>
    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ListItem>San Jose State University</ListItem>
      <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
        <ListItem>B.S., Computer Science</ListItem>
        <ListItem>Minor, Mathematics</ListItem>
        <ListItem>Graduating May 2019</ListItem>
      </List>
      <ListItem>Internship Duration:</ListItem>
      <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
        <ListItem>May - August 2018 (3 Months)</ListItem>
      </List>
    </List>
  </Slide>
);

Introduction.displayName = 'Introduction';

Introduction.propTypes = {};

Introduction.defaultProps = {};

export default Introduction;
