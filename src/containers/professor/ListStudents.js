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
      />
    );
  }
}

ListStudents.propTypes = {
  address: PropTypes.string.isRequired,
  exams: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  publishMark: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  publishMark: (stdAddress, examAddress) => {
    dispatch(ListStudentsReducer.creators.addMarkRequest({ stdAddress, examAddress }));
  },
  initialize: (examAddress) => {
    dispatch(ListStudentsReducer.creators.manageResultsRequest(examAddress));
  },
});

const mapStateToProps = state => ({
  exams: state['manage-results'].students,
  size: state['manage-results'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListStudents);
