// node databasing.js to run the blockchain population

import { deployed, getAccount } from './deployed';
import AdminFacade from '../../bc/build/contracts/AdminFacade.json';

// add user
const addUser = ({
  name = 'mario',
  surname = 'rossi',
  socialNumber = 'marrsss7580297584',
  serial = 12335,
  address = getAccount(),
  type = 0,
}) => deployed(AdminFacade)
  .then(inst => inst.addUser(
    name,
    surname,
    socialNumber,
    serial,
    address,
    type,
    { from: getAccount() },
  ));

export default addUser;

const users = [{
  name: 'mario',
  surname: 'rossi',
  socialNumber: 'marross2839948857',
  serial: 12335,
  address: '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef',
  type: 0, // student
}, {
  name: 'giovanni',
  surname: 'blu',
  socialNumber: 'gvnblu7580297584',
  serial: 12336,
  address: '0xf17f52151ebef6c7334fad080c5704d77216b732',
  type: 1, // professor
}, {
  name: 'matteo',
  surname: 'arancioni',
  socialNumber: 'mttrnc9361956400',
  serial: 12337,
  address: '0x627306090abab3a6e1400e9345bc60c78a8bef57',
  type: 2, // university
}];

export const addBasicUsers = () => users.forEach(user => addUser(user));
