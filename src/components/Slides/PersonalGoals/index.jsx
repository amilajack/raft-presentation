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

const PersonalGoals = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>{'Personal Goals'}</Heading>

    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ListItem>{'Migrate from NPM to Yarn'}</ListItem>
      <ListItem>{'Integrate Babel & Upgrade to ES7+'}</ListItem>
      <ListItem>{'Utilize async/await'}</ListItem>
      <ListItem>{'Upgrade Dependencies'}</ListItem>

      <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
        <ListItem>{'Webpack, React, Sails'}</ListItem>
      </List>

      <ListItem>{'Monorepo - Frontend & Backend'}</ListItem>
      <ListItem>{'Reusable Project Environment'}</ListItem>
    </List>
  </Slide>
);

PersonalGoals.displayName = 'PersonalGoals';

PersonalGoals.propTypes = {};

PersonalGoals.defaultProps = {};

export default PersonalGoals;
