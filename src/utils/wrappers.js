
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { routerActions } from 'react-router-redux';

export const userIsAuthenticatedStudent = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.userReducer.data !== null && state.userReducer.type === 'student',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedStudent',
});

export const userIsAuthenticatedAdmin = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.userReducer.data !== null && state.userReducer.type === 'admin',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedAdmin',
});

export const userIsAuthenticatedProfessor = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.userReducer.data !== null && state.userReducer.type === 'professor',
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticatedProfessor',
});
