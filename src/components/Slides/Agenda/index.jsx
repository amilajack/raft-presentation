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
├── Title
├── Introduction
├── Project Goals
├── Use Case Demos
├── Obstacles
├── Proposals
├── Conclusion
├── Q&A
└── Live Demo`;

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
