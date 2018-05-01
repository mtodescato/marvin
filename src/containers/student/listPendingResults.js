import React from 'react';
import ListPendingResultsComponent from '../../components/student/listPendingResultsComponent';

export const exams = [{
  name: 'Swe',
  date: '12/12/2018',
  president: 'Tullio',
  cfu: '12',
  result: '30',
},
{
  name: 'Tecnologie Web',
  date: '11/11/2018',
  president: 'Gaggi',
  cfu: '12',
  result: '25',
},
{
  name: 'Basi di Dati',
  date: '10/10/2018',
  president: 'Conti',
  cfu: '6',
  result: '28',
},
];


const ListPendingResults = () => (
  <div>
    <ListPendingResultsComponent exams={exams} />
  </div>
);

export default ListPendingResults;
