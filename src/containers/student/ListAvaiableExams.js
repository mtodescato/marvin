import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListAvaiableExamsComponent from '../../components/student/ListAvaiableExamsComponent';
import { ListBookingExams } from '../../reducers';

class ListAvaiableExams extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <ListAvaiableExamsComponent
        size={this.props.size}
        examsEntries={this.props.exams}
        subscribeToExam={this.props.subscribeToExam}
      />
    );
  }
}

ListAvaiableExams.propTypes = {
  exams: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  subscribeToExam: (address) => {
    dispatch(ListBookingExams.creators.subscribeRequest(address));
  },
  initialize: () => { dispatch(ListBookingExams.creators.listBookingExamsRequest()); },
});

const mapStateToProps = state => ({
  exams: state['list-booking-exams-student'].exams,
  size: state['list-booking-exams-student'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAvaiableExams);
