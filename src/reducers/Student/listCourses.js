import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-courses-student',
  initialState: {
    activeCourseName: -1,
    courses: [],
    size: 0,
    year: 2018,
  },
  actions: ['LIST_COURSES', 'SUBSCRIBE'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_COURSES_SUCCESS:
        return {
          size: action.payload.size,
          theachings: action.payload.courses,
        };
      case types.SUBSCRIBE_SUCCESS:
        return {
          activeCourseName: action.payload.activeCourseName,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listCoursesRequest: year => ({ type: types.LIST_COURSES_REQUEST, payload: { year } }),
    listUsersSuccess: ({ courses, size, activeCourseName }) => ({
      type: types.LIST_COURSES_SUCCESS,
      payload: { courses, size, activeCourseName },
    }),
    listCoursesFailed: error => (
      { type: types.LIST_USERS_FAILED, error: true, payload: { error } }
    ),
    subscribeRequest: courseAdd => (
      { type: types.SUBSCRIBE_REQUEST, payload: { courseAdd } }
    ),
    subscribeSuccess: activeCourseName => (
      { type: types.SUBSCRIBE_SUCCESS, payload: { activeCourseName } }
    ),
    subscribeFailed: error => (
      { type: types.SUBSCRIBE_FAILED, error: true, payload: { error } }
    ),
  }),
});
