import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_DATA,
  LOG_OUT,
  REQUEST_FAILED,
} from './userTypes';
import axios from 'axios';
export const closeModal = () => {
  return {
    type: REQUEST_FAILED,
  };
};
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchUsersData = data => {
  return {
    type: FETCH_USERS_DATA,
    payload: data,
  };
};
export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

{
  /* Logining  */
}
export const login = user => {
  return dispatch => {
    if (user.email === 'abc@gmail.com' && user.password === 'Abc@1234') {
      dispatch(fetchUsersRequest());
      axios
        .get(
          'http://205.134.254.135/~mobile/interview/public/api/restaurants_list',
        )
        .then(res => {
          const data = res.data;
          dispatch(fetchUsersSuccess(user));
          dispatch(fetchUsersData(data));
        })
        .catch(e => dispatch(fetchUsersFailure(e.message)));
    } else {
      dispatch(fetchUsersFailure('User does not exist'));
    }
  };
};
{
  /** logout */
}
export const logout = () => {
  return dispatch => {
    dispatch(logOut());
  };
};

export const requestFailed = () => {
  return dispatch => {
    dispatch(closeModal());
  };
};
