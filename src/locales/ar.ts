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
    YOUR_FULL_LEGAL_NAME_LABEL: 'اسمك القانوني الكامل',
    YOUR_EMAIL_LABEL: 'عنوان بريدك الإلكتروني',
    YOUR_MOBILE_LABEL: 'رقم هاتفك المحمول',
    YOUR_PASSWORD_LABEL: 'كلمة المرور الخاصة بك',
    YOUR_DOB_LABEL: 'تاريخ ميلادك',
    YOUR_COUNTRY_LABEL: 'بلدك',
    YOUR_CITY_LABEL: 'مدينتك',
    YOUR_ADDRESS_LABEL: 'عنوانك',

    //Place Holders
    DOB_PLACEHOLDER: 'السنة  |  الشهر  |  اليوم',

    // ERRORS
    REQUIRED_ERROR_MESSAGE: 'الرجاء إدخال {{fieldName}}!',
    INVALID_ERROR_MESSAGE: 'الرجاء التحقق من صحة {{fieldName}}!',
    ERROR_TITLE: '! خطأ',

    // SUCCESS
    SUCCESS_TITLE: '! نجاح',

    // Buttons:
    LOGOUT: 'تسجيل خروج',
  },
};

export default ar;
