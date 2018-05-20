import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { ListTeachings } from '../../reducers';
import ExamsTeachingComponent from '../../components/professor/ExamsTeachingComponent';

export const exams = [{
  serialNumber: '39A876',
  date: '23/05/2018',
},
{
  serialNumber: '39A876',
  date: '23/05/2018',
},
{
  serialNumber: '39A876',
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
    this.props.initialize(2018);
  }
  render() {
    return (
      <ListTeachingsComponent
        // exams={this.props.exams}
        exams={exams}
        size={this.props.size}
      />
    );
  }
} */

ExamsTeaching.propTypes = {
  /* exams: PropTypes.arrayOf(PropTypes.shape({
    serialNumber: PropTypes.string.isRequired,
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
  initialize: (year) => {
    dispatch(ListTeachings.creators.listTeachingsRequest(year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamsTeaching);
*/

export default connect(null, null)(ExamsTeaching);
