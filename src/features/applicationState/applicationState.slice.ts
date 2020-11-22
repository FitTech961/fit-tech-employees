import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ApplicationState } from './applicationState.type';

const initialState: ApplicationState = {
  isLoading: false,
  errorMessage: 'An Error Occured please try again.',
};


const applicationStateSlice = createSlice({
  name: 'applicationState',

  initialState: initialState,

  reducers: {
    setApplicationState: (state, action) => {
      return { ...state, ...action.payload };
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    reset: () => initialState,
  },


});

export const applicationStateReducer = applicationStateSlice.reducer;

export const applicationStateActions = { ...applicationStateSlice.actions };
