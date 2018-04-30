import React from 'react';
import PropTypes from 'prop-types';
import BookletComponent from '../../components/student/booklet';

const user = {
  name: 'Giovanni',
  surname: 'Calore',
  matricola: '1120000',
  media: '30.00',
};

const exams = [
  {
    anno: '1',
    nome: 'Logica',
    cfu: '6',
    stato: true,
    voto: '30',
    data: '12/12/2012',
  },
  {
    anno: '2',
    nome: 'Data Mining',
    cfu: '6',
    stato: true,
    voto: '30',
    data: '11/11/2011',
  },
  {
    anno: '3',
    nome: 'Swe',
    cfu: '20',
    stato: false,
    voto: 'undefined',
    data: 'undefined',
  },
];

const Booklet = () => (
  <BookletComponent user={user} exams={exams} />
);

export default Booklet;
