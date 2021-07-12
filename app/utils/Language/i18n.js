import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en';
import vi from './locales/vn';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
	I18n.locale = locales[0].languageCode;
}

export const changeLaguage = (languageKey) => {
	I18n.locale = languageKey;
};

I18n.fallbacks = true;
I18n.translations = {
	vi,
	en,
};

export default I18n;
