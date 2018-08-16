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
  <Slide transition={['fade']} bgColor={'secondary'}>
    <Heading textColor={'primary'}>Project Goals</Heading>
    <List textColor={'body'}>
      <ListItem>Create a GUI to automate processes</ListItem>
      <List>
        <ListItem>B.S., Computer Science</ListItem>
        <ListItem>Minor, Mathematics</ListItem>
        <ListItem>Graduating May 2019</ListItem>
      </List>
      <Fill>
        <ListItem>
          Internship Duration:
          <List>
            <ListItem>May - August 2018 (3 Months)</ListItem>
          </List>
        </ListItem>
      </Fill>
    </List>
  </Slide>
);

ProjectGoals.displayName = 'ProjectGoals';

ProjectGoals.propTypes = {};

ProjectGoals.defaultProps = {};

export default ProjectGoals;
