import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Search, Label } from 'grommet';
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

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
          List Users
      </Heading>
    </Box>

    <Box
      className="infoBox"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h5" >
        This page displays the list of the users registered in the system.
        In order to manage the users you can filter them by their unique address
        or based on their role.
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Users found: {size}
      </Heading>
      <Heading tag="h5" >
          Filter users by serial number :
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="Search: #"
      />
    </Box>

    <Table
      responsive
      selectable
    >
      <TableHeader labels={['#', 'First Name', 'Surname', 'Role', 'Address', 'Delete']} />
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
