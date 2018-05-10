import React from 'react';
import ListTeachingsComponent from '../../components/admin/ListTeachingsComponent';

export const teachings = [{
  name: 'Analisi',
  professor: 'Francescopaolo Montefalcone',
  degreeCourse: 'Informatica',
},
{
  name: 'Tecnologie Web',
  professor: 'Orietta Gaggi',
  degreeCourse: 'Informatica',
},
{
  name: 'Basi di Dati',
  professor: 'Paolo Brosio',
  degreeCourse: 'Informatica',
},
];

const address = {};

const ListTeachings = () => (
  <ListTeachingsComponent
    teachings={teachings}
    address={address}
  />
);

export default ListTeachings;
