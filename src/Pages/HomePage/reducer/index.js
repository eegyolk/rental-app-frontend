import {
  MUTATE_ANNOUNCEMENT_IS_FETCHING,
  MUTATE_ANNOUNCEMENT,
  MUTATE_ANNOUNCEMENT_ERROR,
  MUTATE_PROPERTY_TYPES_IS_FETCHING,
  MUTATE_PROPERTY_TYPES,
  MUTATE_PROPERTY_TYPES_ERROR,
} from './actionTypes';

const initialState = {
  announcement: {
    isFetching: false,
    data: null,
    error: null,
  },
  propertyTypes: {
    isFetching: false,
    data: null,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MUTATE_ANNOUNCEMENT_IS_FETCHING: {
      const { isFetching } = action;
      return { ...state, announcement: { ...state.announcement, isFetching } };
    }

    case MUTATE_ANNOUNCEMENT: {
      const { announcement } = action;
      return {
        ...state,
        announcement: { ...state.announcement, data: announcement },
      };
    }

    case MUTATE_ANNOUNCEMENT_ERROR: {
      const { error } = action;
      return { ...state, announcement: { ...state.announcement, error } };
    }

    case MUTATE_PROPERTY_TYPES_IS_FETCHING: {
      const { isFetching } = action;
      return {
        ...state,
        propertyTypes: { ...state.propertyTypes, isFetching },
      };
    }

    case MUTATE_PROPERTY_TYPES: {
      const { propertyTypes } = action;
      return {
        ...state,
        propertyTypes: { ...state.propertyTypes, data: propertyTypes },
      };
    }

    case MUTATE_PROPERTY_TYPES_ERROR: {
      const { error } = action;
      return { ...state, propertyTypes: { ...state.propertyTypes, error } };
    }

    default:
      return state;
  }
};

export default reducer;
