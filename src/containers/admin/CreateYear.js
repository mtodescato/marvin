import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { AddAcademicYear } from '../../reducers';
import CreateYearComponent from '../../components/admin/CreateYearComponent';

const CreateYear = ({ statusAddYearRequest, actions }) => (
  <Box>
    <CreateYearComponent statusAddYearRequest={statusAddYearRequest} actions={actions} />
  </Box>
);

CreateYear.propTypes = {
  actions: PropTypes.shape({
    addYearRequest: PropTypes.func.isRequired,
  }).isRequired,
  statusAddYearRequest: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  statusAddYearRequest: state['add-academic-year'].status,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addYearRequest: (year) => {
      dispatch(AddAcademicYear.creators.addAcademicYearRequest(year));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateYear);
