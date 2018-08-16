// @flow
import PropTypes from 'prop-types';
import React from 'react';
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
import Highlight from 'react-highlight.js';
import FlowLogo from './Logos/FlowLogo';

const flowExample = `function foo(bar: string): number {
  console.log(bar);
  return 10;
}`;

const Flow = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <FlowLogo width={null} height={'200px'} />
    <Text>{'Flowtype'}</Text>
    <List textColor={'body'}>
      <ListItem>{'Static Type Checker for JavaScript'}</ListItem>
      <ListItem>{'Get warnings & assertions with Flow-Runtime'}</ListItem>
      <Highlight language={'javascript'}>{flowExample}</Highlight>
    </List>
  </Slide>
);

Flow.displayName = 'Flow';

Flow.propTypes = {};

Flow.defaultProps = {};

export default Flow;
