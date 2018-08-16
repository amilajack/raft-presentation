// @flow
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
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

const NoMoreSails = props => (
  <Slide transition={['fade']} bgColor={'secondary'} {...props}>
    <Heading textColor={'primary'}>{'No More Sails.js'}</Heading>
    <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
      <ListItem>{'Too assumptious'}</ListItem>
      <ListItem>{'No separate builds for development & production'}</ListItem>
      <ListItem>{'I had to modify it to support Babel'}</ListItem>
      <ListItem>{'Might as well use express'}</ListItem>
      <ListItem>{'Alternatives'}</ListItem>
      <List textColor={'body'} style={{ paddingLeft: 'inherit' }}>
        <ListItem>{'Express'}</ListItem>
        <ListItem>{'Koa'}</ListItem>
        <ListItem>{'hapi.js'}</ListItem>
        <ListItem>{'Django (Python)'}</ListItem>
        <ListItem>{'Flask (Python)'}</ListItem>
        <ListItem>{'Ruby on Rails'}</ListItem>
      </List>
    </List>
  </Slide>
);

NoMoreSails.displayName = 'NoMoreSails';

NoMoreSails.propTypes = {};

NoMoreSails.defaultProps = {};

export default NoMoreSails;
