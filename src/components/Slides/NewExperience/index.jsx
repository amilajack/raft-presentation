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

const NewExperience = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'} lineHeight={1}>
      {'After 2017 Internship'}
    </Heading>
    <List textColor={'body'}>
      <ListItem>{"SJSU President's list - 4.0 GPA for 2017"}</ListItem>
      <ListItem>{'First hackathon - UCSB Jan 2018'}</ListItem>
      <ListItem>{'Math Teaching Assistant'}</ListItem>
      <ListItem>{'Computer Science & Math Tutor'}</ListItem>
      <ListItem>{'CS Department Scholarship'}</ListItem>
      <ListItem>{'More React Projects'}</ListItem>
    </List>
  </Slide>
);

NewExperience.displayName = 'NewExperience';

NewExperience.propTypes = {};

NewExperience.defaultProps = {};

export default NewExperience;
