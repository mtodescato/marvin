import Root from './root';
import Home from './views/home';
import Student from './views/student';
import Admin from './views/admin';
import { userIsAuthenticatedStudent } from './utils/wrappers';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/student',
        component: userIsAuthenticatedStudent(Student),
      },
      {
        path: '/admin',
        component: userIsAuthenticatedStudent(Admin),
      },
    ],
  },
];

export default routes;
