import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { ListTeachings } from '../../reducers';
import ExamsTeachingComponent from '../../components/professor/ExamsTeachingComponent';

export const exams = [{
  address: '39A6789ghdkjsh876',
  date: '23/05/2018',
},
{
  address: '39poiuytreA876',
  date: '23/05/2018',
},
{
  address: '39Asfhdgjhfkj876',
  date: '23/05/2018',
},
];

const ExamsTeaching = () => (
  <ExamsTeachingComponent
    // exams={this.props.exams}
    exams={exams}
    size={3}
  />
);

/*
class ExamsTeaching extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }
  render() {
    return (
      <ExamsTeachingComponent
        size={this.props.size}
        exams={this.props.exams}
      />
    );
  }
} */

ExamsTeaching.propTypes = {
  // teachingAddress: PropTypes.string.isRequired,
  /* exams: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
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
  initialize: (teachingAddress) => {
    dispatch(ListExams.creators.listExamsRequest(teachingAddress));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamsTeaching);
*/

export default connect(null, null)(ExamsTeaching);
