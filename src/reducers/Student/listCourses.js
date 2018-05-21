import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-courses-student',
  initialState: {
    activeCourseName: 'N/A',
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
          ...state,
          activeCourseName: action.payload.activeCourseName,
          courses: action.payload.courses,
          size: action.payload.size,
        };
      case types.SUBSCRIBE_SUCCESS:
        return {
          ...state,
          activeCourseName: action.payload.activeCourseName,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listCoursesRequest: year => ({ type: types.LIST_COURSES_REQUEST, payload: { year } }),
    listCoursesSuccess: ({ courses, size, activeCourseName }) => ({
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
