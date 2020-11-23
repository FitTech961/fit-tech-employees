import { combineReducers, Reducer } from 'redux';

import { loginReducer } from '&features/login/login.slice';
import { applicationStateReducer } from '&features/applicationState/applicationState.slice';
import { employeesReducer } from '&features/landing/employees/employees.slice';

/**
 * Combines reducers of all slices and router into one root reducer
 *
 * @param routerReducer router reducer for redux first history
 */
const createRootReducer = (routerReducer: Reducer) =>
  combineReducers({
    router: routerReducer,
    login: loginReducer,
    applicationState: applicationStateReducer,
    employees: employeesReducer,
    // TODO add other reducers
    // The rest of your reducers go here in the following format:
    // ...
    // feature: featureReducer
    // ...
  });
export default createRootReducer;
