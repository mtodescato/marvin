import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'grommet';
// import { AddExam } from '../../reducers';
import CreateExamComponent from '../../components/professor/CreateExamComponent';


const teachingsEntries = [{
  value: 'Basi di dati',
  address: 'al847582834r598758pha',
  label: <Box direction="row" justify="between" ><span> first </span> <span className="secondary"> 0x1B23075E7D9fa21cAdB1aF0bF624d80DFDF084d3   </span> </Box>,
},
{
  value: 'TecWeb',
  address: 'al847582834598758pha',
  label: <Box direction="row" justify="between" ><span> first </span> <span className="secondary"> 0x1B23075E7D9fa21cAdB1aF0bF624d80DFDF084d3   </span> </Box>,
},
];

const CreateExam = ({ state, actions }) => (
  <CreateExamComponent
    state={state}
    actions={actions}
    teachingsEntries={teachingsEntries}
  />
);

CreateExam.propTypes = {
  /* teachingsEntries: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
  })).isRequired, */
  actions: PropTypes.shape({
    addExamRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = () => ({ /*
const mapStateToProps = state => ({
  state: {
    status: state['add-exam'].status,
  },
  teachingsEntries: state['list-teachings'].users,
    // lista insegnamenti di cui è prof di riferimento
  size: state['list-teachings'].size, */
});

const mapDispatchToProps = () => ({
/*
const mapDispatchToProps = dispatch => ({

  actions: {
    addExamRequest: (exam) => {
      dispatch(AddExam.creators.addExamRequest(exam));
    },
  },
  initialize: () => { dispatch(ListTeachingsReducer.creators.ListTeachingsRequest()); }, */
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateExam);
