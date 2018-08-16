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

const Obstacles = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'} lineHeight={1}>
      {'Obstacles'}
    </Heading>
    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ListItem>
        {'Understanding relations between existing SQL Tables'}
      </ListItem>
      <ListItem>{'Migrating from original frontend'}</ListItem>
      <ListItem>{'Too many planned features'}</ListItem>
      <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
        <ListItem>{'Test Cases'}</ListItem>
        <ListItem>{'Mass Amendment'}</ListItem>
        <ListItem>{'Redux, Redux-Saga'}</ListItem>
      </List>
      <ListItem>{'Communication with non-React devs'}</ListItem>
      <ListItem>{'No time to write test cases'}</ListItem>
    </List>
  </Slide>
);

Obstacles.displayName = 'Obstacles';

Obstacles.propTypes = {};

Obstacles.defaultProps = {};

export default Obstacles;
