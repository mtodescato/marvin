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
      />
    );
  }
}

ExamsTeaching.propTypes = {
  teachingAddress: PropTypes.string.isRequired,
  exams: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  exams: state['list-exams'].exams,
  size: state['list-exams'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (teachingAddress) => {
    dispatch(ListExams.creators.listExamsFromTeachingRequest(teachingAddress));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamsTeaching);
