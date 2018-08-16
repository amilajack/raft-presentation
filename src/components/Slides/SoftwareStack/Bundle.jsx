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
import BundleAnalysisPic from './bundle.png';
// import GridLayout from 'react-grid-layout';

const BundleAnalysis = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'} lineHeight={1}>
      {'Webpack bundle analysis'}
    </Heading>
    <img src={BundleAnalysisPic} alt={'bundle analysis'} />
  </Slide>
);

BundleAnalysis.displayName = 'Obstacles';

BundleAnalysis.propTypes = {};

BundleAnalysis.defaultProps = {};

export default BundleAnalysis;
