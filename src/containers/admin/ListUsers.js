import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListUsersComponent from '../../components/admin/ListUsersComponent';
import { UserReducers } from '../../reducers';

class ListUsers extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <ListUsersComponent
        size={this.props.size}
        userEntries={this.props.users}
        deleteAction={this.props.deleteAction}
      />
    );
  }
}

ListUsers.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
