export const addUserRequest = user => ({ type: 'ADD_USER_REQUEST', payload: { user } });
export const addUserSuccess = () => ({ type: 'ADD_USER_SUCCESS' });
export const addUserFailed = err => ({ type: 'ADD_USER_FAILED', payload: { err } });
