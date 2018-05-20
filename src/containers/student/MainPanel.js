import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/shared/Dashboard';
import Home from '../../containers/student/Home';
import ListStudyCourses from '../../containers/student/ListStudyCourses';
import Booklet from '../../containers/student/Booklet';
import ListAvaiableExams from '../../containers/student/ListAvaiableExams';
import ListPendingResults from '../../containers/student/ListPendingResults';
import CreateDegreeRequest from '../../containers/student/DegreeRequest';


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
      return { DashboardComponent: Booklet };
    case 2:
      return { DashboardComponent: ListAvaiableExams };
    case 3:
      return { DashboardComponent: ListPendingResults };
    case 4:
      return { DashboardComponent: ListStudyCourses };
    case 5:
      return { DashboardComponent: CreateDegreeRequest };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanel);
