import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Search, Label, Animate } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import UserEntry from './UserEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';
// import TransactionStatus from '../../components/shared/TransactionStatus';

const ListUsersComponent = ({
  initialize,
  statusListUsersRequest,
  // statusDeleteRequest,
  size,
  userEntries,
  deleteAction,
}) => (
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
    { // <TransactionStatus status={statusDeleteRequest} />
    }
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
    {statusListUsersRequest === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
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
      </Animate>
    : <MetamaskStatus
      status={statusListUsersRequest}
      tryAgainRequest={initialize}
      // initializeValue="2018"
    />
    }
  </Box>
);

ListUsersComponent.propTypes = {
  statusListUsersRequest: PropTypes.string.isRequired,
  // statusDeleteRequest: PropTypes.string.isRequired,
  userEntries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    role: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default ListUsersComponent;
