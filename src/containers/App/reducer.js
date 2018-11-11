import {
  LOAD_ISSUES_REQUEST,
  LOAD_ISSUES_SUCCESS,
  LOAD_ISSUES_ERROR
} from './constants';

const initialState = {
  issues: [],
  isLoading: false,
  error: null,
  page: 1
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ISSUES_REQUEST:
      return  { ...state, page: action.payload, isLoading: true};

    case LOAD_ISSUES_SUCCESS:
      return  { ...state, issues: [...state.issues, ...action.payload], isLoading: false};

    case LOAD_ISSUES_ERROR:
      return { error: action.payload, isLoading: false};

    default:
      return state
  }
}
