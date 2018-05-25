import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListExams } from '../../reducers';
import ListExamComponent from '../../components/professor/ListExamComponent';

class ListExamsContainer extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }
  render() {
    return (
      <ListExamComponent
        exams={this.props.exams}
        size={this.props.size}
      />
    );
  }
}

ListExamsContainer.propTypes = {
  exams: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  exams: state['list-exams'].exams,
  size: state['list-exams'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListExams.creators.listExamsRequest(year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListExamsContainer);
