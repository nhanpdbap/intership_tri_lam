import { removeLocalStorage } from '../../utils';
import { createReducer, updateObject } from '../../utils/redux';
import * as Types from './constants';

export const initialState = {
  authenticated: false,
  currentUser: {
    username: 'Tri',
    gender: 1,
    address: 'asdasdasdadasd',
  },
  isLoading: false,
  error: null,
};

const registerRequest = (state) => updateObject(state, { isLoading: true });

const registerSuccess = (state, action) => updateObject(state, { isLoading: false, currentUser: action.user });

const registerFail = (state, action) => updateObject(state, { isLoading: false, error: action.error });

const loginRequest = (state) => updateObject(state, { isLoading: true });

const loginSuccess = (state, action) =>
  updateObject(state, { isLoading: false, authenticated: true, currentUser: action.user });

const loginFail = (state, action) =>
  updateObject(state, { isLoading: false, authenticated: false, error: action.error });

const getCurrentUserRequest = (state) => updateObject(state, { isLoading: true });

const getCurrentUserSuccess = (state, action) =>
  updateObject(state, { isLoading: false, authenticated: true, currentUser: action.currentUser });

const getCurrentUserFail = (state, action) => updateObject(state, { authenticated: false, error: action.error });

const updateUserRequest = (state) => updateObject(state, { isLoading: true });

const updateUserSuccess = (state, action) => updateObject(state, { isLoading: false, currentUser: action.user });

const updateUserFail = (state, action) => updateObject(state, { isLoading: false, error: action.error });

const updatePasswordRequest = (state) => updateObject(state, { isLoading: true });

const updatePasswordSuccess = (state) => updateObject(state, { isLoading: false });

const updatePasswordFail = (state, action) =>
  updateObject(state, {
    isLoading: false,
    error: action.error,
  });

const logOutRequest = (state) => updateObject(state, { isLoading: true });

const logOutSuccess = (state) =>
  updateObject(state, { isLoading: false, authenticated: false }, removeLocalStorage('CART'));

const logOutFailure = (state, action) => updateObject(state, { isLoading: false, error: action.error });

export default createReducer(initialState, {
  [Types.REGISTER_TYPE.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_TYPE.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_TYPE.REGISTER_FAILURE]: registerFail,

  [Types.LOGIN_TYPE.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_TYPE.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_TYPE.LOGIN_FAILURE]: loginFail,

  [Types.GET_USER_TYPE.GET_CURRENT_USER_REQUEST]: getCurrentUserRequest,
  [Types.GET_USER_TYPE.GET_CURRENT_USER_SUCCESS]: getCurrentUserSuccess,
  [Types.GET_USER_TYPE.GET_CURRENT_USER_FAILURE]: getCurrentUserFail,

  [Types.UPDATE_USER_TYPE.UPDATE_USER_REQUEST]: updateUserRequest,
  [Types.UPDATE_USER_TYPE.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_TYPE.UPDATE_USER_FAILURE]: updateUserFail,

  [Types.UPDATE_PASSWORD_TYPE.UPDATE_PASSWORD_REQUEST]: updatePasswordRequest,
  [Types.UPDATE_PASSWORD_TYPE.UPDATE_PASSWORD_SUCCESS]: updatePasswordSuccess,
  [Types.UPDATE_PASSWORD_TYPE.UPDATE_PASSWORD_FAILURE]: updatePasswordFail,

  [Types.LOGOUT_TYPES.LOGOUT_USER_REQUEST]: logOutRequest,
  [Types.LOGOUT_TYPES.LOGOUT_USER_SUCCESS]: logOutSuccess,
  [Types.LOGOUT_TYPES.LOGOUT_USER_FAILURE]: logOutFailure,
});
