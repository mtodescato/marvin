import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import Store from './store';

const Root = ({ route }) => (
  <div className="App">
    <Provider store={Store}>
      <Grommet>
        {renderRoutes(route.routes)}
      </Grommet>
    </Provider>
  </div>
);

Root.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      component: PropTypes.func.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Root;
