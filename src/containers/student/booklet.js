import React from 'react';
import BookletComponent from '../../components/student/booklet';

const user = {
  name: 'Giovanni',
  surname: 'Calore',
  matricola: '1120000',
  media: '30.00',
};

const exams = [
  {
    responsabile: 'Maietti',
    nome: 'Logica',
    cfu: '6',
    stato: true,
    voto: '30',
    data: '12/12/2012',
  },
  {
    responsabile: 'Goggiuolo',
    nome: 'Data Mining',
    cfu: '6',
    stato: true,
    voto: '30',
    data: '11/11/2011',
  },
  {
    responsabile: 'Tullio',
    nome: 'Swe',
    cfu: '20',
    stato: false,
    voto: '',
    data: '',
  },
];

const Booklet = () => (
  <BookletComponent user={user} exams={exams} />
);

export default Booklet;
