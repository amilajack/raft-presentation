// @flow
// import 'normalize.css';
import 'prism-reactjs/dist/index.css';
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
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { TitleSlide, IntroductionSlide } from './Slides';

const theme = createTheme(
  // colors
  {
    primary: '#0C4B9B',
    header: '#AFD135',
    secondary: 'white',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  // fonts
  {
    primary: 'Ntnx',
    secondary: 'Ntnx'
  }
);

export default hot(module)(
  class Presentation extends Component {
    render() {
      return (
        <Deck
          controls
          transition={['zoom', 'slide']}
          transitionDuration={500}
          theme={theme}
          progress={'bar'}
        >
          <TitleSlide />
          <IntroductionSlide />
        </Deck>
      );
    }
  }
);
