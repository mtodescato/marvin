import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListExams as ListExamsReducer } from '../../reducers';
import ListExamComponent from '../../components/professor/ListExamComponent';

class ListExams extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }
  render() {
    return (
      <ListExamComponent
        exams={this.props.exams}
        size={this.props.size}
        initialize={this.props.initialize}
        statusListExamsRequest={this.props.statusListExamsRequest}
      />
    );
  }
}

ListExams.propTypes = {
  statusListExamsRequest: PropTypes.string.isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    examAddress: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  statusListExamsRequest: state['list-exams'].status,
  exams: state['list-exams'].exams,
  size: state['list-exams'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListExamsReducer.creators.listExamsRequest(year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListExams);
