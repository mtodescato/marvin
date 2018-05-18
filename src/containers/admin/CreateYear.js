import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { AddYear } from '../../reducers';
import CreateYearComponent from '../../components/admin/CreateYearComponent';

const CreateYear = ({ state, actions }) => (
  <CreateYearComponent state={state} actions={actions} />
);

CreateYear.propTypes = {
  actions: PropTypes.shape({
    addYearRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};
/*
const mapStateToProps = state => ({
  state: {
    status: state['add-year'].status,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addYearRequest: (year) => {
      dispatch(AddYear.creators.addYearRequest(year));
    },
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateYear);

*/

export default CreateYear;
