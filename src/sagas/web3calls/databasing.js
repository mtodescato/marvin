import { deployed, getAccount } from './deployed';
import AdminFacade from '../../bc/build/contracts/AdminFacade.json';

export default () => deployed(AdminFacade)
  .then(inst => inst.addUser(
    'mario',
    'rossi',
    'marross2839948857',
    12333,
    getAccount(),
    2,
    { from: getAccount() },
  ));
