import {TurboModuleRegistry} from 'react-native';
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_DATA,
  LOG_OUT,
  REQUEST_FAILED,
} from './userTypes';

const initialState = {
  isloading: false,
  isSocialLogin: false,
  isAuthenticated: false,
  requestFailed: false,
  restaurantData: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isloading: false,
        isAuthenticated: true,
        email: action?.payload?.email,
        password: action?.payload?.password,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isloading: false,
        requestFailed: true,
        error: action?.payload,
      };
    case FETCH_USERS_DATA:
      return {
        ...state,
        restaurantData: action?.payload?.data,
      };
    case LOG_OUT:
      return {
        ...state,
        email: '',
        password: '',
        isAuthenticated: false,
        restaurantData: [],
      };
    case REQUEST_FAILED:
      return {
        ...state,
        requestFailed: false,
      };
    default:
      return state;
  }
};
export default reducer;
