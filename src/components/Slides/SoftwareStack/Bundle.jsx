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
      {'Webpack bundle analysis'}
    </Heading>
    <img src={require('./bundle.png')} />
  </Slide>
);

Obstacles.displayName = 'Obstacles';

Obstacles.propTypes = {};

Obstacles.defaultProps = {};

export default Obstacles;
