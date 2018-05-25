import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListTeachingsProfessor as ListTeachings } from '../../reducers';
import ListTeachingsComponent from '../../components/professor/ListTeachingsComponent';

class ListTeachingsContainer extends React.Component {
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

ListTeachingsContainer.propTypes = {
  teachings: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  teachings: state['list-teachings-professor'].teachings,
  size: state['list-teachings-professor'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListTeachings.creators.listTeachingsRequest(year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTeachingsContainer);
