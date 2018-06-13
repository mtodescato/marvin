import React from 'react';
import PropTypes from 'prop-types';
import Sticker from 'grommet/components/icons/base/RadialSelected';
import TableRow from 'grommet/components/TableRow';

const ExamEntry = props => (

  <TableRow>
    <td>{props.responsabile}</td>
    <td>{props.nome}</td>
    <td>
      {props.stato === 'pending' || props.stato === 'rejected' ? <Sticker colorIndex="critical" /> : null }
      {props.stato === 'subscribed' ? <Sticker colorIndex="warning" /> : null }
      {props.stato === 'published' || props.stato === 'accepted' ? <Sticker colorIndex="ok" /> : null }
    </td>
    <td>{props.voto === 'undefined' ? '-' : props.voto}</td>
    <td>{props.data}</td>
  </TableRow>
);

ExamEntry.propTypes = {
  nome: PropTypes.string.isRequired,
  responsabile: PropTypes.string.isRequired,
  stato: PropTypes.string.isRequired,
  voto: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default ExamEntry;
