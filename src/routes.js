import Root from './root';
import Home from './views/home';
import Student from './views/student';
import Admin from './views/admin';
import Professor from './views/professor';
import { userIsAuthenticatedStudent, userIsAuthenticatedAdmin, userIsAuthenticatedProfessor } from './utils/wrappers';

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
        component: userIsAuthenticatedAdmin(Admin),
      },
      {
        path: '/professor',
        component: userIsAuthenticatedProfessor(Professor),
      },
    ],
  },
];

export default routes;
