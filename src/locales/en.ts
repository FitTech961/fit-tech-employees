import { loginNameSpace } from '&features/login/login.i18n';
import { landingNameSpace } from '&features/landing/landing.i18n';

/**
 * English translation resources.
 * Each object correspond to a namespace related to a feature.
 */
let en = {
  /** login namespace */
  login: loginNameSpace.en,

  /** login namespace */
  landing: landingNameSpace.en,

  common: {
    //Labels
    YOUR_EMAIL_LABEL: 'Email address ',
    YOUR_PASSWORD_LABEL: 'Password',
    ADD_EMPLOYEE: 'Add Employee',

    //Place Holders
    NAME_PLACEHOLDER: 'Richard Nassar',
    EMAIL_PLACEHOLDER: 'richard.nassar961@gmail.com',
    MOBILE_PLACEHOLDER: '03 040 506',
    PASSWORD_PLACEHOLDER: '********',
    ADDRESS_PLACEHOLDER: 'Beirut, Lebanon',

    // ERRORS
    REQUIRED_ERROR_MESSAGE: 'Please provide {{fieldName}}!',
    INVALID_ERROR_MESSAGE: 'Please make sure {{fieldName}} is valid!',
    ERROR_TITLE: 'Error!',

    // SUCCESS
    SUCCESS_TITLE: 'Success!',

    // Buttons:
    LOGOUT: 'Logout',
    CANCEL: 'CANCEL',

    // Hints
    MOBILE_HINT: 'Enter 8 digits',

    YES: 'Yes',
    NO: 'No',
    DELETE_EMPLOYEE: 'Delete Employee',
    DELETE_EMPLOYEE_MSG: 'Are you sure you want to delete this employee?',
    DELETE_MSG_SUCCESS: 'Employee Deleted successfully',
    ADDED_EMPLOYEE_SUCCESS: 'Employee Added successfully',
    EDIT_EMPLOYEE_SUCCESS: 'Employee Edited successfully',
  },
};

export default en;
