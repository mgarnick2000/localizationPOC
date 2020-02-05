import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import en from '../translations/english';
import ar from '../translations/arabic';
import fr from '../translations/french';
export const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ar: () => require('../translations/arabic.json'),
  en: () => require('../translations/english.json'),
  fr: () => require('../translations/french.json'),
};

export const translate = (key, config) => i18n.t(key, config);
export const setI18Config = () => {
  const fallback = {languageTag: 'en', isRTL: false};
  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  I18nManager.forceRTL(isRTL);
  i18n.translations = {ar, en, fr};
  i18n.locale = languageTag;
  return i18n;
};
