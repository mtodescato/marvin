import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Grommet } from 'grommet';
import { Provider } from 'react-redux';
import Store from './store';
import getWeb3 from './getWeb3';
import Web3 from './reducers/web3';
import addBasicUsers from './sagas/web3calls/databasing';

let web3 = getWeb3.then((results) => {
  web3 = results;
});

let account;
export const accountInterval = setInterval(() => {
  if (web3.eth && web3.eth.accounts[0] !== account) {
    if (account !== undefined) window.location.reload(); // non la prima volta
    [account] = web3.eth.accounts;
    Store.dispatch(Web3.creators.web3AddressSuccess(account));
  }
}, 500);

// populate blockchain with fake user, exam, academicYear ...
addBasicUsers();

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
