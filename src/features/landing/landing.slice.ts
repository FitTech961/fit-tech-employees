import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Landing } from './landing.type';

// WIP
const initialState: Landing = {
  test: '',
};

const makeLandingApiCall = createAsyncThunk(
  // TODO change this method based on usecase
  // You can add as many thunks as required
  // Delete this method if not needed
  'landing/makeLandingApiCallStatus',
  async (body: any) => {
    // Make your API call here
  },
);

const landingSlice = createSlice({
  name: 'landing',
  initialState: initialState,

  reducers: {
    setLanding: (state, action) => {
      return { ...state, ...action.payload };
    },

    reset: () => initialState,
    // Add here reducers
    // ...
  },

  extraReducers: builder => {
    // TODO remove extraReducers if there are no thunks
    builder.addCase(makeLandingApiCall.pending, (state, action) => {
      // Write pending logic here
    });
    builder.addCase(makeLandingApiCall.fulfilled, (state, action) => {
      // Write success logic here
    });
    builder.addCase(makeLandingApiCall.rejected, (state, action) => {
      // Write failure logic here
    });
  },
});

/**
 * Reducers are exported so they could be added to store
 */
export const landingReducer = landingSlice.reducer;

/**
 * Actions hold the same names as reducers.
 * Actions can be dispached using 'useDispacth' hook,
 * or by 'mapDispatchToProps' in the redux 'connect' function
 */
export const landingActions = { ...landingSlice.actions, makeLandingApiCall };
