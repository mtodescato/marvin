import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListStudentsComponent from '../../components/professor/ListStudentsComponent';
// import { ListStudents as ListStudentsReducer } from '../../reducerst';

export const examsResults = [{
  name: 'Marco',
  surname: 'Carta',
  socialNumber: '52526',
  address: 'sdgfjskfsfkldfa',
}, {
  name: 'Marco',
  surname: 'Carta',
  socialNumber: '52526',
  address: 'sdgfj345skkldfa',
}, {
  name: 'Marco',
  surname: 'Carta',
  socialNumber: '52526',
  address: 'sdgfjkhlskkldfa',
},
];
/*
class ListStudents extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <ListStudentsComponent
        size={this.props.size}
        examsResults={this.props.exams}
        examAddress={props.examAddress}
        publishMark={this.props.publishMark}
      />
    );
  }
} */

const ListStudents = props => (
  <ListStudentsComponent
    size={3}
    examsResults={examsResults}
    examAddress={props.examAddress}
  />
);

ListStudents.propTypes = {
  examAddress: PropTypes.string.isRequired,
  /*
  examsResults: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    socialNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  publishMark: PropTypes.func.isRequired, */
};

const mapDispatchToProps = () => ({
/* const mapDispatchToProps = dispatch => ({
  publishMark: (address) => {
    dispatch(ListStudentsReducer.creators.publishMarkRequest(address));
},
  initialize: () => { dispatch(ListStudentsReducer.creators.listStudentssRequest()); }, */
});

const mapStateToProps = () => ({
/* const mapStateToProps = state => ({
  examsResults: state['list-students'].exams,
  size: state['list-students'].size, */
});

export default connect(mapStateToProps, mapDispatchToProps)(ListStudents);
