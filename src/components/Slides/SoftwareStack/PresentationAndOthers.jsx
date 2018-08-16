// @flow
import PropTypes from 'prop-types';
import React from 'react';
import Highlight from 'react-highlight.js';
import { Flex, Box } from 'grid-styled';
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

const presentationStack = `.
├── Spectacle 5
├── React 16
├── Babel 7 Beta
├── svgr
├── Webpack 4
├── highlight.js
└── Express`;

const othersStack = `.
├── Yarn
├── Yarn Workspaces
├── Lerna
├── React DevTools
└── PostgreSQL`;

const PresentationAndOthers = props => (
  <Slide
    transition={['fade']}
    bgColor={'primary'}
    {...props}
    style={{ overflow: 'hide' }}
  >
    <Fit>
      <Flex
        style={{
          padding: 0,
          width: '100%',
          margin: 0,
        }}
      >
        <Box width={43 / 100} px={0} style={{ alignContent: 'center' }}>
          <Heading textColor={'header'} textSize={'200%'}>
            Presentation
          </Heading>
          <Highlight language={'agenda-code bash'}>{othersStack}</Highlight>
        </Box>
        <Box width={(100 - 86) / 100} px={0} />

        <Box width={43 / 100} px={0} style={{ alignContent: 'center' }}>
          <Heading textColor={'header'} textSize={'200%'}>
            Others
          </Heading>
          <Highlight language={'agenda-code bash'}>
            {presentationStack}
          </Highlight>
        </Box>
      </Flex>
    </Fit>
  </Slide>
);

PresentationAndOthers.displayName = 'PresentationAndOthers';

PresentationAndOthers.propTypes = {};

PresentationAndOthers.defaultProps = {};

export default PresentationAndOthers;
