import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { ListTeachings } from '../../reducers';
import ListTeachingsComponent from '../../components/professor/ListTeachingsComponent';

export const teachings = [{
  name: 'Analisi',
  course: 'Informatica',
  responsible: 'Francescfopaolo Montefalcone',
  address: 'fdsjkhfkjdhgskjghkjs',
},
{
  name: 'Basi',
  course: 'Informatica',
  responsible: 'Giacobbe',
  address: 'fdsjkhfdkjdhgskjghkjs',
},
{
  name: 'Tecweb',
  course: 'Inform7atica',
  responsible: 'Momo Sissoko',
  address: 'fdsjkhfkjdhgsskjghkjs',
},
];

const ListTeachings = () => (
  <ListTeachingsComponent
        // teachings={this.props.teachings}
    teachings={teachings}
    // size={this.props.size}
    size={3}
  />
);

/*
class ListTeachings extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }
  render() {
    return (
      <ListTeachingsComponent
        // teachings={this.props.teachings}
        teachings={teachings}
        size={this.props.size}
      />
    );
  }
} */

ListTeachings.propTypes = {
  /* teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired, */
};

const mapStateToProps = state => ({
  // teachings: state['list-teachings'].teachings,
  size: state['list-teachings'].size,
});
/*
const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListTeachings.creators.listTeachingsRequest(year));
  },
}); */

export default connect(mapStateToProps, null)(ListTeachings);
