import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';

const ExamEntry = props => (

  <TableRow>
    <td>{props.responsabile}</td>
    <td>{props.nome}</td>
    <td>{props.cfu}</td>
    <td>{props.stato ? 'passed' : 'pending'}</td>
    <td>{props.voto}</td>
    <td>{props.data}</td>
  </TableRow>
);

ExamEntry.propTypes = {
  nome: PropTypes.string.isRequired,
  responsabile: PropTypes.string.isRequired,
  cfu: PropTypes.string.isRequired,
  stato: PropTypes.bool.isRequired,
  voto: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
};

export default ExamEntry;
