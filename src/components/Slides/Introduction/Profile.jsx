// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import GridLayout from 'react-grid-layout';
import {
  BlockQuote,
  Cite,
  Deck,
  Fit,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

export default class Profile extends Component {
  static displayName = 'Profile';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Slide transition={['fade']} bgColor={'secondary'}>
        <Heading textColor={'primary'}>Introduction</Heading>
        <List textColor={'body'}>
          <ListItem>San Jose State University</ListItem>
          <List>
            <ListItem>B.S., Computer Science</ListItem>
            <ListItem>Minor, Mathematics</ListItem>
            <ListItem>Graduating May 2019</ListItem>
          </List>
          <Fit>
            <ListItem>
              Internship Duration: May - August 2018 (3 Months)
            </ListItem>
          </Fit>
        </List>
      </Slide>
    );
  }
}
