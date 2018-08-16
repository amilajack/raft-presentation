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
  <Slide transition={['fade']} bgColor={'secondary'}>
    <Heading textColor={'primary'}>
      Experiences after Summer 17 Nutanix Internship
    </Heading>
    <List textColor={'body'}>
      <ListItem>San Jose State University</ListItem>
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

NewExperience.displayName = 'NewExperience';

NewExperience.propTypes = {};

NewExperience.defaultProps = {};

export default NewExperience;
