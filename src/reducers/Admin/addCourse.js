import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'add-course',
  initialState: {},
  actions: ['ADD_COURSE'],
}).extend({
  creators: ({ types }) => ({
    addCourseRequest: course => ({
      type: types.ADD_COURSE_REQUEST,
      payload: { course },
    }),
    addCourseSuccess: () => ({
      type: types.ADD_COURSE_SUCCESS,
    }),
    addCourseFailed: error => ({
      type: types.ADD_COURSE_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
