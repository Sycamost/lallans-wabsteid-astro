import type Locale from './Locale';

import translate from '$i18n/translate';
import tError from '$i18n/translations/errors/userAlreadyExistsError';

class UserAlreadyExistsError extends Error {
  constructor(userId: string, locale: Locale) {
    super(translate(locale)(tError, { key: 'message', userId }));
    this.name = 'UserAlreadyExistsError';
  }
}

export default UserAlreadyExistsError;
