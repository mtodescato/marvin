import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddExam, ListTeachingsProfessor } from '../../reducers';
import CreateExamComponent from '../../components/professor/CreateExamComponent';

class CreateExam extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }

  render() {
    return (
      <CreateExamComponent
        actions={this.props.actions}
        teachingsEntries={this.props.teachingsEntries}
        statusAddExamRequest={this.props.statusAddExamRequest}
      />
    );
  }
}

CreateExam.propTypes = {
  teachingsEntries: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
  })).isRequired,
  actions: PropTypes.shape({
    addExamRequest: PropTypes.func.isRequired,
  }).isRequired,
  initialize: PropTypes.func.isRequired,
  statusAddExamRequest: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  statusAddExamRequest: state['add-exam-professor'].status,
  teachingsEntries: state['list-teachings-professor'].teachings.map(teaching => ({
    value: teaching.name,
    address: teaching.address,
    label: `${teaching.name}`,
  })),
  size: state['list-teachings-professor'].size,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addExamRequest: (exam) => {
      dispatch(AddExam.creators.addExamRequest(exam));
    },
  },
  initialize: (address) => {
    dispatch(ListTeachingsProfessor.creators.listTeachingsRequest(address));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateExam);
