import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListTeachings } from '../../reducers';
import ListTeachingsComponent from '../../components/admin/ListTeachingsComponent';

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
  teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  teachings: state['list-teachings'].teachings,
  size: state['list-teachings'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListTeachings.creators.listTeachingsRequest(year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTeachingsContainer);
