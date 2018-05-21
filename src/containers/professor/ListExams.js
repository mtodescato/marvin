import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { ListExams } from '../../reducers';
import ListExamComponent from '../../components/professor/ListExamComponent';

export const exams = [{
  ID: '12345',
  name: 'Swe',
  date: '12/12/2018',
  address: 'sdgfjskkldfa',
}, {
  ID: '35655',
  name: 'Swe',
  date: '12/12/2018',
  address: 'sdgfjskkldfa',
}, {
  ID: '45663',
  name: 'Swe',
  date: '12/12/2018',
  address: 'sdgfjskkldfa',
},
];

const ListExams = () => (
  <ListExamComponent
        // exams={this.props.exams}
    exams={exams}
    // size={this.props.size}
    size={3}
  />
);

/*
class ListExams extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }
  render() {
    return (
      <ListExamComponent
        // exams={this.props.exams}
        exams={exams}
        size={this.props.size}
      />
    );
  }
} */

ListExams.propTypes = {
  /* exams: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cfu: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired, */
};
/*
const mapStateToProps = state => ({
  // exams: state['list-exams'].exams,
  // size: state['list-exams'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListExams.creators.listTeachingsRequest(year));
  },
}); */

export default connect(null, null)(ListExams);
