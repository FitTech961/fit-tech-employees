import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Login, LoginBody } from './login.type';
import { hashField } from '&auth/hashField';
import { EMPLOYEE_MS_LOGIN_DEV } from '&config/url';
import { applicationStateActions } from '&features/applicationState/applicationState.slice';
import { employeesActions } from '&features/landing/employees/employees.slice';

const initialState: Login = {
  isAuthenticated: false,
  username: '',
  token: '123',
  fullName: '',
  role: '',
};

const loginAPI = createAsyncThunk('loginSlice/login', async ({ username, password }: LoginBody, { rejectWithValue }) => {
  try {
    const body = {
      email: username.trim().toLowerCase(),
      password: hashField(password),
    };

    const response = await axios.post(`${EMPLOYEE_MS_LOGIN_DEV}/signin`, body);

    response.data.status = response.status;

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

const logoutAPI = createAsyncThunk('loginSlice/logout', async (arg: void, { dispatch }) => {
  dispatch(loginActions.reset());
  dispatch(applicationStateActions.reset());
  dispatch(employeesActions.reset());
});

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,

  reducers: {
    setLogin: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
  },

  extraReducers: builder => {
    builder.addCase(loginAPI.fulfilled, (state: any, { payload, meta: { arg } }) => {
      const { firstName, lastName, jwt } = payload;
      const { username } = arg;

      state.fullName = `${firstName} ${lastName}`;
      state.token = jwt;
      state.username = username;
      state.isAuthenticated = true;
    });
  },
});

/**
 * Reducers are exported so they could be added to store
 */
export const loginReducer = loginSlice.reducer;

/**
 * Actions hold the same names as reducers.
 * Actions can be dispached using 'useDispacth' hook,
 * or by 'mapDispatchToProps' in the redux 'connect' function
 */
export const loginActions = { ...loginSlice.actions, logoutAPI, loginAPI };
