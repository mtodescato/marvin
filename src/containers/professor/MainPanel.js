import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/shared/Dashboard';
import Home from '../../containers/professor/Home';
import ListTeachings from './ListTeachings';
import ListExams from './ListExams';
import CreateExam from './CreateExam';
import ShowMeTheCost from '../../components/shared/ShowMeTheCost';

const MainPanel = ({ DashboardComponent }) => (
  <div>
    <Dashboard Component={DashboardComponent} />
  </div>
);

MainPanel.propTypes = {
  DashboardComponent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  switch (state['menu-entries'].id) {
    case 0:
      return { DashboardComponent: Home };
    case 1:
      return { DashboardComponent: ListTeachings };
    case 2:
      return { DashboardComponent: ListExams };
    case 3:
      return { DashboardComponent: CreateExam };
    case 4:
      return { DashboardComponent: ShowMeTheCost };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanel);
