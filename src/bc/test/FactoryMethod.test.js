const FactoryMethod = artifacts.require('./FactoryMethod.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';
const address2 = '0xea6d486f25bb15045051ed4e9c63d9781dcf9c87';


contract('Testing AdminFacade', () => {
  let FactoryMethodInstance;

  FactoryMethod.deployed().then((inst) => { FactoryMethodInstance = inst; });

  it('TS0034: can create users', async () => {
    const admin = await FactoryMethodInstance.createUser('Mario', 'Rossi', 'mrrss98r647e573', 112343, address2, 2);
    const professor = await FactoryMethodInstance.createUser('Mario', 'Rossi', 'mrrss98r647e573', 112343, address1, 1);
    const student = await FactoryMethodInstance.createUser('Mario', 'Rossi', 'mrrss98r647e573', 112343, address0, 0);
    assert.notEqual(admin, '0x0000000000000000000000000000000000000000', 'created admin');
    assert.notEqual(professor, '0x0000000000000000000000000000000000000000', 'created professor');
    assert.notEqual(student, '0x0000000000000000000000000000000000000000', 'created student');
  });
});
