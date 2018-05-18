import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'add-teaching',
  initialState: {},
  actions: ['ADD_TEACHING'],
}).extend({
  creators: ({ types }) => ({
    addTeachingRequest: teaching => ({
      type: types.ADD_TEACHING_REQUEST,
      payload: { teaching },
    }),
    addTeachingSuccess: () => ({
      type: types.ADD_TEACHING_SUCCESS,
    }),
    addTeachingFailed: error => ({
      type: types.ADD_TEACHING_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
