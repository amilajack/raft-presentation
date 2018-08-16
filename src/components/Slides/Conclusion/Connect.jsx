// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Heading, Slide, Link, Text } from 'spectacle';

const Connect = props => (
  <Slide transition={['zoom']} bgColor={'primary'} {...props}>
    <Heading
      size={1}
      lineHeight={1}
      fit
      textColor={'header'}
      style={{ fontWeight: 'normal' }}
    >
      {'Connect with Me'}
    </Heading>

    <Text textColor={'white'}>
      <Link
        href={'https://www.linkedin.com/in/vikr01'}
        style={{ color: 'white' }}
      >
        {'LinkedIn: @vikr01'}
      </Link>
      <br />
      <Link href={'https://github.com/vikr01'} style={{ color: 'white' }}>
        {'GitHub: @vikr01'}
      </Link>
    </Text>
  </Slide>
);

Connect.displayName = 'Connect';

Connect.propTypes = {};

Connect.defaultProps = {};

export default Connect;
