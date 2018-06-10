import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Search, Animate } from 'grommet';
import UserEntry from './UserEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';
import TransactionStatus from '../../components/shared/TransactionStatus';

class ListUsersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.setStatus = this.setStatus.bind(this);

    this.state = {
      showStatus: false,
    };
  }

  setStatus(e) {
    this.setState({
      showStatus: e,
    });
  }

  render() {
    return (
      <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
        <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
          <Heading tag="h2" strong>
              List Users
          </Heading>
        </Box>

        <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h5" >
            This page displays the list of the users registered in the system.
            In order to manage the users you can filter them by their unique address
            or based on their role.
          </Heading>
        </Box>

        {this.state.showStatus ? <TransactionStatus setStatus={this.setStatus} /> : null }

        <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h4" >
            Users found: {this.props.size}
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

        {this.props.statusListUsersRequest === 'RESOLVED' ?
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
                { this.props.size !== 0 ?
                  this.props.userEntries.map((element, index) => (
                    <UserEntry
                      key={[element.address]}
                      index={index}
                      {...element}
                      deleteAction={this.props.deleteAction}
                      setStatus={this.setStatus}
                    />
                  ))
                  : <tr><td colSpan="5" align="justify">No results found.</td></tr>
                }
              </tbody>
            </Table>
          </Animate>
        : <MetamaskStatus
          status={this.props.statusListUsersRequest}
          tryAgainRequest={this.props.initialize}
        />
        }
      </Box>
    );
  }
}

ListUsersComponent.propTypes = {
  statusListUsersRequest: PropTypes.string.isRequired,
  statusDeleteRequest: PropTypes.string.isRequired,
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
