import React from 'react';
import DegreeRequestComponent from '../../components/student/DegreeRequestComponent';

const relators = [
  {
    professore: 'Mario',
    ruolo: 'Responsabile',
  },
  {
    professore: 'Gaggi',
    ruolo: 'Amministratore',
  },
  {
    professore: 'Montefalcone',
    ruolo: 'Progettista',
  },
  {
    professore: 'Mario',
    ruolo: 'Responsabile',
  },
  {
    professore: 'Gaggi',
    ruolo: 'Amministratore',
  },
  {
    professore: 'Montefalcone',
    ruolo: 'Progettista',
  },
];

const createDegreeDemandRequest = {};

const DegreeRequest = () => (
  <div>
    <DegreeRequestComponent
      relators={relators}
      requestAlreadyDone={false}
      createDegreeDemandRequest={createDegreeDemandRequest}
    />
  </div>
);

export default DegreeRequest;
