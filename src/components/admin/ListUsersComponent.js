import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading, Search, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import UserEntry from './UserEntry';

const ListUsersComponent = ({ size, userEntries, deleteAction }) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box
      className="PanelHeader"
      direction="row"
      justify="start"
      align="center"
      separator="bottom"
    >
      <FormNextLinkIcon />
      <Label>
        Manage Users
      </Label>
      <FormNextLinkIcon />
      <Label>
        List Users
      </Label>
    </Box>
    <Heading
      align="center"
      tag="h2"
    >
        List Users
    </Heading>
    <Heading
      align="center"
      tag="h3"
    >
      Filter users by serial number
    </Heading>
    <Search
      inline
      fill={false}
      size="medium"
      placeHolder="Search: #"
      dropAlign={{ right: 'right' }}
    />
    <Heading
      align="center"
      tag="h3"
      margin={{ vertical: 'medium' }}
    >
      Users found: {size}
    </Heading>
    <Table
      responsive
      selectable="true"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Role</th>
          <th>Address</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          userEntries.map((element, index) => (
            <UserEntry
              key={[element.address]}
              index={index}
              {...element}
              deleteAction={deleteAction}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListUsersComponent.propTypes = {
  userEntries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    role: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default ListUsersComponent;
