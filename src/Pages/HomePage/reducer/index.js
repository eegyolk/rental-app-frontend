import {
  MUTATE_ANNOUNCEMENT_IS_FETCHING,
  MUTATE_ANNOUNCEMENT,
  MUTATE_ANNOUNCEMENT_ERROR,
} from './actionTypes';

const initialState = {
  announcement: {
    isFetching: false,
    data: {},
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MUTATE_ANNOUNCEMENT_IS_FETCHING:
      const { isFetching } = action;
      return { ...state, announcement: { ...state.announcement, isFetching } };

    case MUTATE_ANNOUNCEMENT:
      const { announcement } = action;
      return {
        ...state,
        announcement: { ...state.announcement, data: announcement },
      };

    case MUTATE_ANNOUNCEMENT_ERROR:
      const { error } = action;
      return { ...state, announcement: { ...state.announcement, error } };

    default:
      return state;
  }
};

export default reducer;
