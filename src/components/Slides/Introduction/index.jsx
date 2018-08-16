// @flow
import PropTypes from 'prop-types';
import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import Profile from './Profile';

// const index = props => (
//   <Slide transition={['fade']} bgColor={'secondary'} textColor={'primary'}>
//     <BlockQuote>
//       <Quote>Example Quote</Quote>
//       <Cite>Author</Cite>
//     </BlockQuote>
//   </Slide>
// );

const Introduction = props => <React.Fragment>{[<Profile />]}</React.Fragment>;

Introduction.displayName = 'Introduction';

Introduction.propTypes = {};

Introduction.defaultProps = {};

export default Introduction;
