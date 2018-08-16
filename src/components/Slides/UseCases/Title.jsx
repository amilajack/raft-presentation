// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Heading, Slide } from 'spectacle';

const UseCases = props => (
  <Slide transition={['zoom']} bgColor={'primary'} {...props}>
    <Heading
      size={1}
      lineHeight={3}
      fit
      textColor={'header'}
      style={{ fontWeight: 'normal' }}
    >
      {'Use Cases'}
    </Heading>
  </Slide>
);

UseCases.displayName = 'UseCases';

UseCases.propTypes = {};

UseCases.defaultProps = {};

export default UseCases;
