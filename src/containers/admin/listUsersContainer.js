import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UsersListComponent from '../../components/admin/dashboard/listUsers';
import { deleteUserRequest, initialize } from '../../actions/admin/listUsersActions';

class UsersList extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <div>
        <UsersListComponent
          size={this.props.size}
          userEntry={this.props.users}
          deleteAction={this.props.deleteAction}
        />
      </div>
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
  deleteAction: (address) => { dispatch(deleteUserRequest(address)); },
  initialize: () => { dispatch(initialize()); },
});

const mapStateToProps = state => ({
  users: state.usersListReducer.users,
  size: state.usersListReducer.size,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
