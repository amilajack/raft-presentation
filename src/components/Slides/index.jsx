/* eslint import/prefer-default-export:0 */
import React from 'react';
import Agenda from './Agenda';
import Title from './Title';
import Introduction from './Introduction';
import NewExperience from './NewExperience';
import ProjectGoals from './ProjectGoals';

export default [
  <Title key={'title'} />,
  <Agenda key={'agenda'} />,
  [
    <Introduction key={'introduction'} />,
    <NewExperience key={'newExperience'} />,
  ],
  <ProjectGoals key={'project goals'} />,
];
