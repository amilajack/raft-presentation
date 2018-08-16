// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Heading, Slide } from 'spectacle';

const SoftwareStackTitle = props => (
  <Slide transition={['zoom']} bgColor={'primary'} {...props}>
    <Heading
      size={1}
      lineHeight={3}
      fit
      textColor={'header'}
      style={{ fontWeight: 'normal' }}
    >
      {'Software Stack'}
    </Heading>
  </Slide>
);

SoftwareStackTitle.displayName = 'SoftwareStackTitle ';

SoftwareStackTitle.propTypes = {};

SoftwareStackTitle.defaultProps = {};

export default SoftwareStackTitle;
