import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListStudentsComponent from '../../components/professor/ListStudentsComponent';
import { ManageResults as ListStudentsReducer } from '../../reducers';

class ListStudents extends React.Component {
  componentWillMount() {
    this.props.initialize(this.props.address);
  }

  render() {
    return (
      <ListStudentsComponent
        size={this.props.size}
        examsResults={this.props.exams}
        examAddress={this.props.address}
        publishMark={this.props.publishMark}
        initialize={this.props.initialize}
        statusListStudentRequest={this.props.statusListStudentRequest}
      />
    );
  }
}

ListStudents.propTypes = {
  statusListStudentRequest: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    serial: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  publishMark: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  publishMark: (stdAddress, examAddress, mark) => {
    dispatch(ListStudentsReducer.creators.addMarkRequest(stdAddress, examAddress, mark));
  },
  initialize: (examAddress) => {
    dispatch(ListStudentsReducer.creators.manageResultsRequest(examAddress));
  },
});

const mapStateToProps = state => ({
  statusListStudentRequest: state['manage-results'].status,
  exams: state['manage-results'].students,
  size: state['manage-results'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListStudents);
