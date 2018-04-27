import Root from './root';
import Home from './views/home';
import Student from './views/student';
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
    ],
  },
];

export default routes;
