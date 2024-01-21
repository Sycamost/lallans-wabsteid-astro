import type Locale from './Locale';

import translate from '$i18n/translate';
import tError from '$i18n/translations/errors/registrationResponseVerificationFailedError';

class RegistrationResponseVerificationFailedError extends Error {
  constructor(locale: Locale) {
    super(translate(locale)(tError, { key: 'message' }));
    this.name = 'RegistrationResponseVerificationFailedError';
  }
}

export default RegistrationResponseVerificationFailedError;
