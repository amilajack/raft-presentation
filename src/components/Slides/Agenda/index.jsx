// @flow
import PropTypes from 'prop-types';
import React from 'react';
import Highlight from 'react-highlight.js';
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

const source = `.
├── Agenda
├── Introduction
├── Project Goals
├── Use Case Demos
├── Software Stack
├── Obstacles
├── Proposals
├── Conclusion
├── Live Demo
└── Q&A`;

const Agenda = props => (
  <Slide transition={['fade']} bgColor={'primary'} {...props}>
    <Heading textColor={'header'}>Agenda</Heading>
    <Highlight language={'agenda-code bash'}>{source}</Highlight>
  </Slide>
);

Agenda.displayName = 'Profile';

Agenda.propTypes = {};

Agenda.defaultProps = {};

export default Agenda;
