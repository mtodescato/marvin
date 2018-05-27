import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListPendingResultsComponent from '../../components/student/ListPendingResultsComponent';
import { ListExamsResults as ListPendingResultReducer } from '../../reducers';

class ListAvaiableExams extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <ListPendingResultsComponent
        size={this.props.size}
        examsResults={this.props.examsResults}
        accept={this.props.accept}
        reject={this.props.reject}
      />
    );
  }
}

ListAvaiableExams.propTypes = {
  examsResults: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    examAddress: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  accept: (address) => {
    dispatch(ListPendingResultReducer.creators.acceptRequest(address));
  },
  reject: (address) => {
    dispatch(ListPendingResultReducer.creators.rejectRequest(address));
  },
  initialize: () => { dispatch(ListPendingResultReducer.creators.listExamsResultsRequest()); },
});

const mapStateToProps = state => ({
  examsResults: state['list-exams-results-student'].exams,
  size: state['list-exams-results-student'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAvaiableExams);
