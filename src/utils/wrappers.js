
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { routerActions } from 'react-router-redux';

export const userIsAuthenticatedStudent = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state['user-reducer'].data !== null && state['user-reducer'].type === 'student',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedStudent',
});

export const userIsAuthenticatedAdmin = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state['user-reducer'].data !== null && state['user-reducer'].type === 'admin',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedAdmin',
});

export const userIsAuthenticatedProfessor = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state['user-reducer'].data !== null && state['user-reducer'].type === 'professor',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedProfessor',
});
