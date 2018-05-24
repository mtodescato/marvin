import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { AddAcademicYear } from '../../reducers';
import CreateYearComponent from '../../components/admin/CreateYearComponent';
import ListYears from '../../containers/admin/ListYears';

const CreateYear = ({ state, actions }) => (
  <Box>
    <CreateYearComponent state={state} actions={actions} />
    <ListYears />
  </Box>
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
