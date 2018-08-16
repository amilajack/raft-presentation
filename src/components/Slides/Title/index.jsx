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
import NutanixSVGLogo from './NutanixNegSVGLogo';

const Title = props => (
  <Slide transition={['zoom']} bgColor={'primary'} {...props}>
    <Heading
      size={1}
      lineHeight={3}
      fit
      textColor={'header'}
      style={{ fontWeight: 'normal' }}
    >
      <NutanixSVGLogo width={null} height={null} />
    </Heading>
    <Heading
      size={2}
      textColor={'header'}
      bold={false}
      style={{ fontWeight: 'normal' }}
    >
      Xi Raft
    </Heading>
    <Text
      size={1}
      lineHeight={1}
      textColor={'secondary'}
      style={{ fontWeight: 'normal' }}
    >
      Billing Admin Panel
    </Text>
    <Text
      size={2}
      lineHeight={1}
      textColor={'secondary'}
      style={{ fontWeight: 'normal' }}
    >
      Vikram Rangaraj
    </Text>
  </Slide>
);

Title.displayName = 'index';

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
