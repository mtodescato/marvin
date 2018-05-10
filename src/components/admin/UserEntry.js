import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button } from 'grommet';

const UserEntry = props => (
  <TableRow>
    <td>{props.index}</td>
    <td>{props.name}</td>
    <td>{props.surname}</td>
    <td>{props.role}</td>
    <td>{props.address}</td>
    <td><Button primary onClick={() => props.deleteAction(props.address)}>Delete</Button></td>
  </TableRow>
);

UserEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default UserEntry;
