import React from 'react';
import PropTypes from 'prop-types';
import Sticker from 'grommet/components/icons/base/BrandGrommetPath';
import TableRow from 'grommet/components/TableRow';

const ExamEntry = props => (

  <TableRow>
    <td>{props.responsabile}</td>
    <td>{props.nome}</td>
    <td>
      {props.stato === 'pending' ?
        <Sticker colorIndex="critical" /> : <Sticker colorIndex="ok" />
      }
    </td>
    <td>{props.voto === 'undefined' ? '-' : props.voto}</td>
    <td>{props.data}</td>
  </TableRow>
);

ExamEntry.propTypes = {
  nome: PropTypes.string.isRequired,
  responsabile: PropTypes.string.isRequired,
  stato: PropTypes.string.isRequired,
  voto: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
};

export default ExamEntry;
