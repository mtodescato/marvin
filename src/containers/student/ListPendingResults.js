import React from 'react';
import ListPendingResultsComponent from '../../components/student/ListPendingResultsComponent';

export const examsResults = [{
  name: 'Swe',
  date: '12/12/2018',
  cfu: '12',
  result: '30',
},
{
  name: 'Tecnologie Web',
  date: '11/11/2018',
  cfu: '12',
  result: '25',
},
{
  name: 'Basi di Dati',
  date: '10/10/2018',
  cfu: '6',
  result: '28',
},
];

const manageVote = () => {};

const ListPendingResults = () => (
  <div>
    <ListPendingResultsComponent examsResults={examsResults} manageVote={manageVote} />
  </div>
);

export default ListPendingResults;
