export const nextRequest = address => ({ type: 'NEXT_REQUEST', payload: { address } });
export const nextSuccess = user => ({ type: 'NEXT_SUCCESS', payload: { user } });
export const nextFailed = err => ({ type: 'NEXT_FAILED', payload: { err }, error: true });

export const sizeRequest = () => ({ type: 'SIZE_REQUEST' });
export const sizeSuccess = size => ({ type: 'SIZE_SUCCESS', payload: { size } });
export const sizeFailed = err => ({ type: 'SIZE_FAILED', payload: { err }, error: true });

export const initialize = () => ({ type: 'INITIALIZE' });

export const deleteUserRequest = address => ({ type: 'DELETE_USER_REQUEST', payload: { address } });
export const deleteUserSuccess = address => ({ type: 'DELETE_USER_SUCCESS', payload: { address } });
export const deleteUserFailed = err => ({ type: 'DELETE_USER_FAILED', payload: { err }, error: true });
