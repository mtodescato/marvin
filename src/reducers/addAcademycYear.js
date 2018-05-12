import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'add-academyc-year',
  initialState: {},
  actions: ['ADD_ACADEMYC_YEAR'],
}).extend({
  creators: ({ types }) => ({
    addAcademycYearRequest: academycYear => ({
      type: types.ADD_ACADEMYC_YEAR_REQUEST,
      payload: { academycYear },
    }),
    addAcademycYearSuccess: () => ({
      type: types.ADD_ACADEMYC_YEAR_SUCCESS,
    }),
    addAcademycYearFailed: error => ({
      type: types.ADD_ACADEMYC_YEAR_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
