import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListTeachings as ListTeachingsReducer } from '../../reducers';
import ListTeachingsComponent from '../../components/admin/ListTeachingsComponent';

class ListTeachings extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }
  render() {
    return (
      <ListTeachingsComponent
        teachings={this.props.teachings}
        size={this.props.size}
        initialize={this.props.initialize}
        statusListTeachingsRequest={this.props.statusListTeachingsRequest}
      />
    );
  }
}

ListTeachings.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListTeachingsRequest: PropTypes.string.isRequired,
  teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListTeachingsReducer.creators.listTeachingsRequest(year));
  },
});

const mapStateToProps = state => ({
  statusListTeachingsRequest: state['list-teachings'].status,
  teachings: state['list-teachings'].teachings,
  size: state['list-teachings'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTeachings);
