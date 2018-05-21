import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ListPendingResultsComponent from '../../components/student/ListPendingResultsComponent';
// import { ListPendingResult as ListPendingResultReducer } from '../../reducerst';

export const examsResults = [{
  name: 'Swe',
  date: '12/12/2018',
  cfu: '12',
  mark: '30',
  address: 'sdgfjskkldfa',
},
{
  name: 'Tecnologie Web',
  date: '11/11/2018',
  cfu: '12',
  mark: '25',
  address: 's45etrsgfdskldfa',
},
{
  name: 'Basi di Dati',
  date: '10/10/2018',
  cfu: '6',
  mark: '28',
  address: 'poijkljhsdgfjskkldfa',
},
];
/*
class ListAvaiableExams extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <ListPendingResultsComponent
        size={this.props.size}
        examsResults={this.props.exams}
        manageVote={this.props.manageVote}
      />
    );
  }
} */

const ListAvaiableExams = () => (
  <ListPendingResultsComponent
    size={3}
    examsResults={examsResults}
  />
);

ListAvaiableExams.propTypes = { /*
  examsResults: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cfu: PropTypes.number.isRequired,
    mark: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  manageVote: PropTypes.func.isRequired, */
};

const mapDispatchToProps = () => ({
/* const mapDispatchToProps = dispatch => ({
  manageVote: (address) => {
    dispatch(ListPendingResultReducer.creators.manageVoteRequest(address));
},
  initialize: () => { dispatch(ListPendingResultReducer.creators.listPendingResultsRequest()); }, */
});

const mapStateToProps = () => ({
/* const mapStateToProps = state => ({
  examsResults: state['list-exams-results'].exams,
  size: state['list-exams-results'].size, */
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAvaiableExams);
