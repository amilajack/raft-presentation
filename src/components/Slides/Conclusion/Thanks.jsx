// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Heading, Slide, List, ListItem } from 'spectacle';
import { Flex, Box } from 'grid-styled';

const Thanks = props => (
  <Slide transition={['zoom']} bgColor={'primary'} {...props}>
    <Heading
      size={1}
      lineHeight={1}
      fit
      textColor={'header'}
      style={{ fontWeight: 'normal' }}
    >
      {'Thank you to'}
    </Heading>

    <List textColor={'white'}>
      <Flex>
        <Box width={43 / 100} px={0} style={{ alignContent: 'center' }}>
          <ListItem>{'Parag Kulkarni'}</ListItem>
          <ListItem>{'Manoj Thirutheri'}</ListItem>
          <ListItem>{'Amitesh Madhur'}</ListItem>
          <ListItem>{'Krishna Vadrevu'}</ListItem>
          <ListItem>{'Sanchit Sharma'}</ListItem>
          <ListItem>{'Mario Vinay'}</ListItem>
        </Box>
        <Box width={(100 - 86) / 100} px={0} />
        <Box width={43 / 100} px={0} style={{ alignContent: 'center' }}>
          <ListItem>{'Charan Mukesh'}</ListItem>
          <ListItem>{'Prism-ReactJS Devs'}</ListItem>
          <ListItem>{'Ben Vijayakumar'}</ListItem>
          <ListItem>{'Sami Boulos'}</ListItem>
          <ListItem>{'Amila Welhinda'}</ListItem>
        </Box>
      </Flex>
    </List>
  </Slide>
);

Thanks.displayName = 'Thanks';

Thanks.propTypes = {};

Thanks.defaultProps = {};

export default Thanks;
