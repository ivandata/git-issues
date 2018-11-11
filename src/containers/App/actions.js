import {
  LOAD_ISSUES_REQUEST,
  LOAD_ISSUES_SUCCESS,
  LOAD_ISSUES_ERROR
} from './constants';

export function loadIssues(page) {
  return {
    type: LOAD_ISSUES_REQUEST,
    payload: page + 1
  };
}

export function issuesLoaded(issues) {
  return {
    type: LOAD_ISSUES_SUCCESS,
    payload: issues
  };
}

export function issuesLoadingError(error) {
  return {
    type: LOAD_ISSUES_ERROR,
    payload: error
  };
}

export function fetchIssues(page) {
  return (dispatch) => {
    dispatch(loadIssues(page));

    return fetch(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
      .then(response => response.json())
      .then(result => {
        dispatch(issuesLoaded(result));
      })
      .catch(error => {
        dispatch(issuesLoadingError(error))
      });
  }
}
