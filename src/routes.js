import Root from './root';
import Student from './views/student';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Student,
      },
    ],
  },
];

export default routes;
