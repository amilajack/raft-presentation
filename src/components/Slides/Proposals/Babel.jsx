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
import BabelLogo from './Logos/BabelLogo';

const Babel = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <BabelLogo width={null} height={'200px'} />
    <Text>{'"Write next generation JavaScript, today."'}</Text>
    <List textColor={'body'}>
      <ListItem>{'Compiles next-gen JS code'}</ListItem>
      <ListItem>{'Create an optimized production build'}</ListItem>
    </List>
  </Slide>
);

Babel.displayName = 'Babel';

Babel.propTypes = {};

Babel.defaultProps = {};

export default Babel;
