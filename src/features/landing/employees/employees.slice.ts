import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { message } from 'antd';

import { Employees, Employee } from './employees.type';
import { EMPLOYEE_MS_DEV } from '&config/url';

const emptyEmployee: Employee = {
  firstName: '',
  lastName: '',
  dob: '',
  address: '',
  department: '',
  email: '',
  jobDescription: '',
  jobTitle: '',
  phoneNumber: '',
  role: 'employee',
};

const initialState: Employees = {
  employeesList: [],
  current: emptyEmployee,
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

const editEmployeeByEmail = createAsyncThunk('employees/editByEmail', async ({ body, email }: any, { rejectWithValue }) => {
  try {
    const headers = {
      authorization: 'Bearer 123',
    };

    const response = await axios.patch(`${EMPLOYEE_MS_DEV}/employee?email=${email}`, body, { headers });

    response.data.status = response.status;

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

const deleteEmployeeById = createAsyncThunk('employees/deleteById', async (id: any, { rejectWithValue }) => {
  try {
    const headers = {
      authorization: 'Bearer 123',
    };

    const response = await axios.delete(`${EMPLOYEE_MS_DEV}/employee?id=${id}`, { headers });
    console.log('repsonserr ', response);

    let status: number = 0;
    let result: any = { status };

    result.status = response?.status ?? 0;

    return result;
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
    /** I can mutate the state since we are using immer from redux toolkit */
    setCurrentEmployee: (state, { payload }) => {
      state.current = payload;
    },
    resetCurrentEmployee: state => {
      return { ...state, ...emptyEmployee };
    },

    reset: () => initialState,
  },

  /** Extra reducer for get all employees API */
  extraReducers: builder => {
    builder.addCase(getAllEmployees.pending, (state, action) => {
      // Write pending logic here
    });
    builder.addCase(getAllEmployees.fulfilled, (state, { payload }) => {
      // Write success logic here
      state.employeesList = payload;
    });
    builder.addCase(getAllEmployees.rejected, (state, { payload, error }: any) => {
      message.error(payload?.message || error?.message);
    });
    builder.addCase(editEmployeeByEmail.fulfilled, (state, { payload }) => {});

    /** edit API rejected response */
    builder.addCase(editEmployeeByEmail.rejected, (state, { payload, error }: any) => {
      message.error(payload?.message || error?.message);
    });

    /** delete API rejected response */
    builder.addCase(deleteEmployeeById.rejected, (state, { payload, error }: any) => {
      message.error(payload?.message || error?.message);
    });
  },
});

/**
 * Reducers are exported so they could be added to store
 */
export const employeesReducer = employeesSlice.reducer;

export const employeesActions = { ...employeesSlice.actions, getAllEmployees, editEmployeeByEmail, deleteEmployeeById };
