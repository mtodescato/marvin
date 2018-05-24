import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'add-exam-professor',
  initialState: {},
  actions: ['ADD_EXAM'],
}).extend({
  creators: ({ types }) => ({
    addExamRequest: exam => ({
      type: types.ADD_EXAM_REQUEST,
      payload: { exam },
    }),
    addExamSuccess: () => ({
      type: types.ADD_EXAM_SUCCESS,
    }),
    addExamFailed: error => ({
      type: types.ADD_EXAM_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
