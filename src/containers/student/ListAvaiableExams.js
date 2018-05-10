import React from 'react';
import ListAvaiableExamsComponent from '../../components/student/ListAvaiableExamsComponent';

export const exams = [{
  name: 'Swe',
  date: '12/12/2018',
  cfu: '12',
},
{
  name: 'Tecnologie Web',
  date: '11/11/2018',
  cfu: '12',
},
{
  name: 'Basi di Dati',
  date: '10/10/2018',
  cfu: '6',
},
];

const address = {};

const subscribeToExam = {};

const ListAvaiableExams = () => (
  <div>
    <ListAvaiableExamsComponent exams={exams} address={address} subscribeToExam={subscribeToExam} />
  </div>
);

export default ListAvaiableExams;