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

const Learn = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>
      {'What I learned during this Internship'}
    </Heading>

    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ListItem>{'Creating Production Builds'}</ListItem>
      <ListItem>{'Creating a Private Git Server on a VM'}</ListItem>
      <ListItem>{'More SQL (Postgres)'}</ListItem>
      <ListItem>{'Babel'}</ListItem>
      <ListItem>{'How to make good Webpack configs'}</ListItem>
      <ListItem>{'Linting'}</ListItem>
      <ListItem>{'async/await'}</ListItem>
      <ListItem>{'Setting meetings and being independent'}</ListItem>
      <ListItem>{'Contributing to other projects'}</ListItem>
    </List>
  </Slide>
);

Learn.displayName = 'Learn';

Learn.propTypes = {};

Learn.defaultProps = {};

export default Learn;
