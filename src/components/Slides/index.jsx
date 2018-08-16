/* eslint import/prefer-default-export:0 */
import React from 'react';
import Agenda from './Agenda';
import Title from './Title';
import Introduction from './Introduction';
import NewExperience from './NewExperience';
import ProjectGoals from './ProjectGoals';
import PersonalGoals from './PersonalGoals';
import UseCasesTitle from './UseCases/Title';
import Proposals from './Proposals';
import Obstacles from './Obstacles';
import Conclusion from './Conclusion';
import SoftwareStack from './SoftwareStack';

export default [
  <Title key={'title'} />,
  <Agenda key={'agenda'} />,
  [
    <Introduction key={'introduction'} />,
    <NewExperience key={'newExperience'} />,
  ],
  [
    <ProjectGoals key={'project goals'} />,
    <PersonalGoals key={'personal goals'} />,
  ],
  [<UseCasesTitle key={'use cases title'} />],
  SoftwareStack,
  <Obstacles key={'obstacles'} />,
  Proposals,
  Conclusion,
];
