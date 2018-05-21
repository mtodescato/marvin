import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-cfus';
import ListAvaiableExamsComponent from '../../components/student/ListAvaiableExamsComponent';
// import { ListExam as ListExamReducer } from '../../reducers';

export const examsEntries = [{
  name: 'Informatica',
  date: '31/05/88',
  cfu: '4',
  address: '1ddressaddressaddressaddressaddressaddressaddress',
},
{
  name: 'Matematica',
  date: '31/05/88',
  cfu: '5',
  address: '2ddressaddressaddressaddressaddressaddressaddress',
},
{
  name: 'Biologia',
  date: '31/05/88',
  cfu: '6',
  address: '3ddressaddressaddressaddressaddressaddressaddress',
},
];
/*
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
} */

const ListAvaiableExams = () => (
  <ListAvaiableExamsComponent
    size={3}
    examsEntries={examsEntries}
  />
);

ListAvaiableExams.propTypes = { /*
  exams: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cfu: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  subscribeToExam: PropTypes.func.isRequired, */
};

const mapDispatchToProps = () => ({
/* const mapDispatchToProps = dispatch => ({
  subscribeToExam: (address) => {
    dispatch(ListExamReducer.creators.subscribeRequest(address));
},
  initialize: () => { dispatch(ListExamReducer.creators.listexamsRequest()); }, */
});

const mapStateToProps = () => ({
/* const mapStateToProps = state => ({
  exams: state['list-student-exams'].exams,
  size: state['list-student-exams'].size, */
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAvaiableExams);
