// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Heading, Slide } from 'spectacle';

const Conclusion = props => (
  <Slide transition={['zoom']} bgColor={'primary'} {...props}>
    <Heading
      size={1}
      lineHeight={3}
      fit
      textColor={'header'}
      style={{ fontWeight: 'normal' }}
    >
      {'Conclusion'}
    </Heading>
  </Slide>
);

Conclusion.displayName = 'Conclusion';

Conclusion.propTypes = {};

Conclusion.defaultProps = {};

export default Conclusion;
