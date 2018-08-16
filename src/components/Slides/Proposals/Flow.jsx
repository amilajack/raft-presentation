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
import ReactMarkdown from 'react-markdown';
import FlowLogo from './Logos/FlowLogo';

const flowExample = `\`\`\`javascript
function foo(bar: string): number {
  console.log(bar);
  return 10;
}
\`\`\``;

const Flow = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <FlowLogo width={null} height={'200px'} />
    <Text>{'Flowtype'}</Text>
    <List textColor={'body'}>
      <ListItem>{'Static Type Checker for JavaScript'}</ListItem>
      <ListItem>{'Get warnings & assertions with Flow-Runtime'}</ListItem>
      <br />
      <ReactMarkdown
        source={flowExample}
        className={'markdown-body markdown-custom'}
      />
    </List>
  </Slide>
);

Flow.displayName = 'Flow';

Flow.propTypes = {};

Flow.defaultProps = {};

export default Flow;
