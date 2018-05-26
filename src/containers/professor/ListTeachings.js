import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListTeachingsProfessor as ListTeachingsReducer } from '../../reducers';
import ListTeachingsComponent from '../../components/professor/ListTeachingsComponent';

class ListTeachings extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }
  render() {
    return (
      <ListTeachingsComponent
        teachings={this.props.teachings}
        size={this.props.size}
      />
    );
  }
}

ListTeachings.propTypes = {
  teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  teachings: state['list-teachings-professor'].teachings,
  size: state['list-teachings-professor'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListTeachingsReducer.creators.listTeachingsRequest(year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTeachings);
