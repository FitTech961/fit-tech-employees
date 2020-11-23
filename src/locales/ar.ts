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
  },
};

export default ar;
