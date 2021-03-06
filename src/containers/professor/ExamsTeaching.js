import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListExams } from '../../reducers';
import ExamsTeachingComponent from '../../components/professor/ExamsTeachingComponent';

class ExamsTeaching extends React.Component {
  componentWillMount() {
    this.props.initialize(this.props.teachingAddress);
  }
  render() {
    return (
      <ExamsTeachingComponent
        size={this.props.size}
        exams={this.props.exams}
        initializeValue={this.props.teachingAddress}
        initialize={this.props.initialize}
        statusListExamsRequest={this.props.statusListExamsRequest}
      />
    );
  }
}

ExamsTeaching.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListExamsRequest: PropTypes.string.isRequired,
  teachingAddress: PropTypes.string.isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  statusListExamsRequest: state['list-exams'].status,
  exams: state['list-exams'].exams,
  size: state['list-exams'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (teachingAddress) => {
    dispatch(ListExams.creators.listExamsFromTeachingRequest(teachingAddress));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamsTeaching);
