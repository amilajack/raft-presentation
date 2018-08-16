import React from 'react';
import Title from './Title';
import FrontendBackend from './FrontendBackend';
import PresentationAndOthers from './PresentationAndOthers';
import BundleAnalyzer from './Bundle';

export default [
  <Title key={'software stack title'} />,
  <FrontendBackend key={'frontendbackend stack'} />,
  <PresentationAndOthers key={'presentation+others stack'} />,
  <BundleAnalyzer key={'bundleanalyzer'} />,
];
