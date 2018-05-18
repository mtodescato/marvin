import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListTeachingsComponent from '../../components/admin/ListTeachingsComponent';
// import { ListCourses as ListCoursesReducer } from '../../reducers';

export const teachings = [{
  name: 'Analisi',
  course: 'Informatica',
  responsible: 'Francescopaolo Montefalcone',
}, {
  name: 'Analisi',
  course: 'Informatica',
  responsible: 'Francescopaolo Montefalcone',
}, {
  name: 'Analisi',
  course: 'Informatica',
  responsible: 'Francescopaolo Montefalcone',
},
];

class ListTeachings extends React.Component {
  /*
  componentWillMount() {
    this.props.initialize();
  } */

  justfortheLint() { // da eliminare
    this.size = 0;
  }

  render() {
    return (
      <ListTeachingsComponent
        size={this.props.size}
        teachingsEntries={teachings}
        // coursesEntries={this.props.courses}
      />
    );
  }
}

ListTeachings.propTypes = {
  /* courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
  })).isRequired,
  */
  size: PropTypes.number.isRequired,
  // initialize: PropTypes.func.isRequired,
};
/*
const mapDispatchToProps = dispatch => ({
  initialize: () => { dispatch(ListTeachingsReducer.creators.listTeachingsRequest()); },
});

const mapStateToProps = state => ({
  teachings: state['list-teachings'].teachings,
  size: state['list-teachings'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCourses);
*/

export default ListTeachings;

