import React from 'react';
import { connect } from 'react-redux';
import { ListTeachings } from '../../reducers';
import ListTeachingsComponent from '../../components/admin/ListTeachingsComponent';

class ListTeachingsContainer extends React.Component {
  componentWillMount() {
    this.props.actions.initialize(2018);
  }
  render() {
    return (
      <ListTeachingsComponent
        teachings={this.props.teachings}
      />
    );
  }
}

const mapStateToProps = state => ({
  teachings: state['list-teachings'].teachings,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    initialize: (year) => {
      dispatch(ListTeachings.creators.listTeachingsRequest(year));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTeachingsContainer);
