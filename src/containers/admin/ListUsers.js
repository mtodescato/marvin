import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListUsersComponent from '../../components/admin/ListUsersComponent';
import { ListUsers as ListUserReducer } from '../../reducers';


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
        initialize={this.props.initialize}
        statusListUsersRequest={this.props.statusListUsersRequest}
        statusDeleteRequest={this.props.statusDeleteRequest}
      />
    );
  }
}

ListUsers.propTypes = {
  statusListUsersRequest: PropTypes.string.isRequired,
  statusDeleteRequest: PropTypes.string.isRequired,
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

const mapDispatchToProps = dispatch => ({
  deleteAction: (address) => { dispatch(ListUserReducer.creators.deleteRequest(address)); },
  initialize: () => { dispatch(ListUserReducer.creators.listUsersRequest()); },
});

const mapStateToProps = state => ({
  statusListUsersRequest: state['list-users'].status,
  statusDeleteRequest: state['list-users'].statusAction,
  users: state['list-users'].users,
  size: state['list-users'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
