
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { routerActions } from 'react-router-redux';

export const userIsAuthenticatedStudent = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state['web-3-user-info'].data !== null && state['web-3-user-info'].type === 'student',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedStudent',
});

export const userIsAuthenticatedAdmin = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state['web-3-user-info'].data !== null && state['web-3-user-info'].type === 'admin',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedAdmin',
});

export const userIsAuthenticatedProfessor = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state['web-3-user-info'].data !== null && state['web-3-user-info'].type === 'professor',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedProfessor',
});
