// @flow
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
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

const source = `\`\`\`bash
.
├── Title
├── Introduction
├── Project Goals
├── Use Case Demos
├── Obstacles
├── Proposals
├── Conclusion
├── Q&A
└── Live Demo
\`\`\``;

const Agenda = props => (
  <Slide transition={['fade']} bgColor={'primary'}>
    <Heading textColor={'header'}>Agenda</Heading>
    <Fit>
      <Text textColor={'secondary'} padding={0} textSize={'unset'}>
        <ReactMarkdown
          source={source}
          className={'markdown-body markdown-custom'}
        />
      </Text>
    </Fit>
  </Slide>
);

Agenda.displayName = 'Profile';

Agenda.propTypes = {};

Agenda.defaultProps = {};

export default Agenda;
