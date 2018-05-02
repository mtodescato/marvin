import React from 'react';
import DegreeRequestComponent from '../../components/student/degreeRequest';

const relators = [
  {
    professore: 'Tullio',
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
    professore: 'Tullio',
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

const DegreeRequest = () => (
  <div>
    <DegreeRequestComponent relators={relators} requestAlreadyDone={false} />
  </div>
);

export default DegreeRequest;
