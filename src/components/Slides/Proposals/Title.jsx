// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Heading, Slide } from 'spectacle';

const ProposalsTitle = props => (
  <Slide transition={['zoom']} bgColor={'primary'} {...props}>
    <Heading
      size={1}
      lineHeight={3}
      fit
      textColor={'header'}
      style={{ fontWeight: 'normal' }}
    >
      {'Proposals'}
    </Heading>
  </Slide>
);

ProposalsTitle.displayName = 'ProposalsTitle';

ProposalsTitle.propTypes = {};

ProposalsTitle.defaultProps = {};

export default ProposalsTitle;
