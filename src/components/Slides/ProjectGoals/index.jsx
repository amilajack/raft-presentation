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

const ProjectGoals = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>{'Project Goals'}</Heading>

    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ListItem>{'Create GUI to make Billing management easy'}</ListItem>
      <ListItem>{'Transform UX to match Nutanix Theme'}</ListItem>
      <ListItem>{'Integrate Okta Authentication & Auditing'}</ListItem>
      <ListItem>{'Add User Management (Free & Paid)'}</ListItem>
      <ListItem>{'Add Usage Management'}</ListItem>
      <ListItem>{'Add Promo Code Management'}</ListItem>
    </List>
  </Slide>
);

ProjectGoals.displayName = 'ProjectGoals';

ProjectGoals.propTypes = {};

ProjectGoals.defaultProps = {};

export default ProjectGoals;
