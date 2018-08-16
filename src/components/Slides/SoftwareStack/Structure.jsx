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

const frontendStack = `.
├── React 16
├── Babel 6
├── Webpack 4
├── Nutanix Prism-Reactjs
├── React-Router
├── React-Loadable
└── JQuery`;

const backendStack = `.
├── Sails 1
├── Babel 6
├── dotenv
├── Okta OIDC Middleware
└── PostgreSQL`;

const FrontendAndBackend = props => (
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
            Backend
          </Heading>
          <Highlight language={'agenda-code bash'}>{backendStack}</Highlight>
        </Box>
        <Box width={(100 - 86) / 100} px={0} />

        <Box width={43 / 100} px={0} style={{ alignContent: 'center' }}>
          <Heading textColor={'header'} textSize={'200%'}>
            Frontend
          </Heading>
          <Highlight language={'agenda-code bash'}>{frontendStack}</Highlight>
        </Box>
      </Flex>
    </Fit>
  </Slide>
);

FrontendAndBackend.displayName = 'FrontendAndBackend';

FrontendAndBackend.propTypes = {};

FrontendAndBackend.defaultProps = {};

export default FrontendAndBackend;
