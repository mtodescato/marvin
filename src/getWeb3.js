import Web3 from 'web3';

const getWeb3 = new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', () => {
    let web3;
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(window.web3.currentProvider);
      console.log('Injected web3 detected.');
    } else {
      console.log('no web3 injected');
      reject();
    }
    console.log('metamask');
    resolve(web3);
  });
});

export default getWeb3;

