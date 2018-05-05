import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/student/dashboard';
import Home from '../../containers/student/home';
import ListStudyCourses from '../../containers/student/listCourses';
import Booklet from '../../containers/student/booklet';
import ListAvaiableExams from '../../containers/student/listAvaiableExams';
import ListPendingResults from '../../containers/student/listPendingResults';
import CreateDegreeRequest from '../../containers/student/degreeRequest';


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
      return { DashboardComponent: ListStudyCourses };
    case 3:
      return { DashboardComponent: ListAvaiableExams };
    case 4:
      return { DashboardComponent: ListPendingResults };
    case 5:
      return { DashboardComponent: CreateDegreeRequest };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanel);
