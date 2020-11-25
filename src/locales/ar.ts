import { loginNameSpace } from '&features/login/login.i18n';
import { landingNameSpace } from '&features/landing/landing.i18n';

/**
 * Arabic translation resources.
 * Each object correspond to a namespace related to a feature.
 */
let ar = {
  /** login namespace */
  login: loginNameSpace.ar,

  /** login namespace */
  landing: landingNameSpace.ar,

  common: {
    //Labels
    YOUR_EMAIL_LABEL: 'عنوان بريدك الإلكتروني',
    YOUR_PASSWORD_LABEL: 'كلمة المرور الخاصة بك',
    ADD_EMPLOYEE: 'اضافة موظف',

    //Place Holders
    ADDRESS_PLACEHOLDER: 'بيروت، لبنان',

    // ERRORS
    REQUIRED_ERROR_MESSAGE: 'الرجاء إدخال {{fieldName}}!',
    INVALID_ERROR_MESSAGE: 'الرجاء التحقق من صحة {{fieldName}}!',
    ERROR_TITLE: '! خطأ',

    // SUCCESS
    SUCCESS_TITLE: '! نجاح',

    // Buttons:
    LOGOUT: 'تسجيل خروج',
    CANCEL: 'إلغاء',

    // Hints
    MOBILE_HINT: 'أدخل 8 أرقام',

    YES: 'نعم',
    NO: 'لا',
    DELETE_EMPLOYEE: 'حذف الموظف',
    DELETE_EMPLOYEE_MSG: 'هل أنت متأكد أنك تريد حذف هذا الموظف؟',
    DELETE_MSG_SUCCESS: 'تم حذف الموظف بنجاح',
    ADDED_EMPLOYEE_SUCCESS: 'تمت إضافة الموظف بنجاح',
    EDIT_EMPLOYEE_SUCCESS: 'تم تحرير الموظف بنجاح',
  },
};

export default ar;
