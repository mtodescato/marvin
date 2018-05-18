import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddAcademicYear } from '../../reducers';
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

const mapDispatchToProps = dispatch => ({
  actions: {
    addYearRequest: (year) => {
      dispatch(AddAcademicYear.creators.addAcademicYearRequest(year));
    },
  },
});


export default connect(null, mapDispatchToProps)(CreateYear);
