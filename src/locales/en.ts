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
    YOUR_FULL_LEGAL_NAME_LABEL: 'Your full legal name ',
    YOUR_EMAIL_LABEL: 'Your email address ',
    YOUR_MOBILE_LABEL: 'Your mobile number ',
    YOUR_PASSWORD_LABEL: 'Your password',
    YOUR_MOTHER_MAIDEN_NAME_LABEL: "Your mother's maiden name",
    YOUR_DOB_LABEL: 'Your Date of Birth',
    YOUR_COUNTRY_LABEL: 'Your country',
    YOUR_CITY_LABEL: 'Your city',
    YOUR_ADDRESS_LABEL: 'Your address',
    YOUR_DOCUMENT_LABEL: 'Your Passport or ID copy',

    //Place Holders
    NAME_PLACEHOLDER: 'Richard Nassar',
    EMAIL_PLACEHOLDER: 'richard.nassar961@gmail.com',
    MOBILE_PLACEHOLDER: '03 040 506',
    PASSWORD_PLACEHOLDER: '********',
    DOB_PLACEHOLDER: 'Day  |  Month  |  Year',
    ADDRESS_PLACEHOLDER: 'Omar Douk Street, M1 Bldg',

    // ERRORS
    REQUIRED_ERROR_MESSAGE: 'Please provide {{fieldName}}!',
    INVALID_ERROR_MESSAGE: 'Please make sure {{fieldName}} is valid!',
    ERROR_TITLE: 'Error!',

    // SUCCESS
    SUCCESS_TITLE: 'Success!',
  },
};

export default en;
