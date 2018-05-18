import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateTeaching from '../../components/admin/CreateTeachingComponent';
import { ListProfessors } from '../../reducers';

class CreateTeachingContainer extends React.Component {
  componentWillMount() {
    this.props.actions.initialize();
  }
  render() {
    return (
      <CreateTeaching professors={this.props.professors} actions={this.props.actions} />
    );
  }
}

CreateTeachingContainer.propTypes = {
  actions: PropTypes.shape({
    addTeachingRequest: PropTypes.func.isRequired,
  }).isRequired,
  professors: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  professors: state['list-professors'].professors.map(professor => ({
    value: professor.address,
    label: `${professor.name} ${professor.surname}`,
  })),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    initialize: () => { dispatch(ListProfessors.creators.listProfessorsRequest()); },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeachingContainer);
