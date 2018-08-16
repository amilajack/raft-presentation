/* eslint import/prefer-default-export:0 */
import React from 'react';
import Agenda from './Agenda';
import Title from './Title';
import Introduction from './Introduction';
import NewExperience from './NewExperience';
import ProjectGoals from './ProjectGoals';
import PersonalGoals from './PersonalGoals';
import UseCasesTitle from './UseCases/Title';
import ProposalsTitle from './Proposals/Title';
import Yarn from './Proposals/Yarn';

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
  [<ProposalsTitle key={'proposals title'} />, <Yarn key={'yarn proposal'} />],
];
