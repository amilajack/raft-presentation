import React from 'react';
import Babel from './Babel';
import Title from './Title';
import Yarn from './Yarn';
import Flow from './Flow';
import Lerna from './Lerna';
import ScopedPackages from './ScopedPackages';

export default [
  <Title key={'proposals title'} />,
  <Yarn key={'yarn proposal'} />,
  <Babel key={'babel proposal'} />,
  <Flow key={'flow proposal'} />,
  <Lerna key={'lerna proposal'} />,
  <ScopedPackages key={'scoped package proposal'} />,
];
