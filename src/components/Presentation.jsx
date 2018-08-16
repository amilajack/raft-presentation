// @flow
// import 'normalize.css';
import 'highlight.js/styles/atom-one-dark.css';
// import 'prism-reactjs/dist/index.css';
import '../styles/custom_style.css';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
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
import createTheme from 'spectacle/lib/themes/default';
import Slides from './Slides';

const theme = createTheme(
  // colors
  {
    primary: '#0C4B9B',
    header: '#AFD135',
    secondary: 'white',
    body: '#76787A',
  },
  // fonts
  {
    primary: 'Ntnx',
    header: 'Ntnx',
    secondary: 'Ntnx',
    body: 'Ntnx',
  }
);

export default hot(module)(
  class Presentation extends Component {
    static displayName = 'Presentation';

    static defaultProps = {};

    static propTypes = {};

    render() {
      return (
        <Deck
          contentWidth={1700}
          controls={false}
          transition={['zoom', 'slide']}
          transitionDuration={500}
          theme={theme}
          progress={'pacman'}
          {...this.props}
        >
          {Slides}
        </Deck>
      );
    }
  }
);
