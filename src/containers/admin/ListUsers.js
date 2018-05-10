import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UsersListComponent from '../../components/admin/ListUsersComponent';
import { ListUsers } from '../../reducers';

class UsersList extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <UsersListComponent
        size={this.props.size}
        userEntry={this.props.users}
        deleteAction={this.props.deleteAction}
      />
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    role: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

// basterebbe collegare solo initialize
const mapDispatchToProps = dispatch => ({
  deleteAction: (address) => { dispatch(ListUsers.creators.deleteRequest(address)); },
  initialize: () => { dispatch(ListUsers.creators.listUsersRequest()); },
});

const mapStateToProps = state => ({
  users: state['list-users'].users,
  size: state['list-users'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
