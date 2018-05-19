const HDWalletProvider = require('truffle-hdwallet-provider');

const infuraApikey = 'https://ropsten.infura.io/<Infura key>';
const mnemonic = 'metamask 20 word seed';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, infuraApikey),
      network_id: 3,
      gas: 4500000,
    },
  },
};

