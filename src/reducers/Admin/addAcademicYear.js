import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'add-academic-year',
  initialState: {},
  actions: ['ADD_ACADEMIC_YEAR'],
}).extend({
  creators: ({ types }) => ({
    addAcademicYearRequest: academicYear => ({
      type: types.ADD_ACADEMIC_YEAR_REQUEST,
      payload: { academicYear },
    }),
    addAcademicYearSuccess: () => ({
      type: types.ADD_ACADEMIC_YEAR_SUCCESS,
    }),
    addAcademicYearFailed: error => ({
      type: types.ADD_ACADEMIC_YEAR_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
