import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Employees } from './employees.type';
import { EMPLOYEE_MS_DEV } from '&config/url';

const initialState: Employees = {
  employeesList: [],
};

const getAllEmployees = createAsyncThunk('employees/getAll', async (arg: void, { rejectWithValue }) => {
  try {
    const headers = {
      authorization: 'Bearer 123',
    };

    const response = await axios.get(`${EMPLOYEE_MS_DEV}/employee`, { headers });

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState: initialState,
  reducers: {
    setEmployees: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
  },

  extraReducers: builder => {
    builder.addCase(getAllEmployees.pending, (state, action) => {
      // Write pending logic here
    });
    builder.addCase(getAllEmployees.fulfilled, (state, { payload }) => {
      // Write success logic here

      state.employeesList = payload;
    });
    builder.addCase(getAllEmployees.rejected, (state, action) => {
      // Write failure logic here
    });
  },
});

/**
 * Reducers are exported so they could be added to store
 */
export const employeesReducer = employeesSlice.reducer;

export const employeesActions = { ...employeesSlice.actions, getAllEmployees };
