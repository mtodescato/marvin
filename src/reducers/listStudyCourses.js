import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'list-study-courses',
  initialState: {
    courses: [],
    size: 0,
    year: 2018,
  },
  actions: ['LIST_STUDY_COURSES'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_STUDY_COURSES_SUCCESS:
        return {
          size: action.payload.size,
          courses: action.payload.courses,
        };
      case types.LIST_STUDY_COURSES_REQUEST:
        return {
          ...state,
          year: action.payload.year,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listStudyCoursesRequest: year => ({
      type: types.LIST_STUDY_COURSES_REQUEST,
      payload: { year },
    }),
    listStudyCoursesSuccess: ({ courses, size }) => ({
      type: types.LIST_STUDY_COURSES_SUCCESS,
      payload: { courses, size },
    }),
    listStudyCoursesFailed: error => ({
      type: types.LIST_STUDY_COURSES_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
