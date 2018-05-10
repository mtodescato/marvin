const contract = require('truffle-contract');

export function getAccount() {
  return window.web3.eth.accounts[0];
}

export function getProvider() {
  return window.web3.currentProvider;
}

export function deployed(Contract) {
  const wrapper = contract(Contract);
  wrapper.setProvider(getProvider());
  return wrapper.deployed();
}

export function at(Contract, address) {
  const wrapper = contract(Contract);
  wrapper.setProvider(getProvider());
  return wrapper.at(address);
}
