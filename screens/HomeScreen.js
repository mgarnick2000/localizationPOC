import React, {PureComponent} from 'react';
import {View, Text, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import LanguageContext from '../languageContext';

// const translationGetters = {
//   // lazy requires (metro bundler does not support symlinks)
//   ar: () => require('../translations/arabic.json'),
//   en: () => require('../translations/english.json'),
//   fr: () => require('../translations/french.json'),
// };

// const translate = (key, config) => i18n.t(key, config);
// const setI18Config = () => {
//   const fallback = {languageTag: 'en', isRTL: false};
//   const {languageTag, isRTL} =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//     fallback;

//   I18nManager.forceRTL(isRTL);

//   i18n.translations = {[languageTag]: translationGetters[languageTag]()};
//   i18n.locale = languageTag;
// };
class HomeScreen extends PureComponent {
  static contextType = LanguageContext;
  navDetails = () => {
    const {navigation} = this.props;
    navigation.navigate('Details');
  };
  render() {
    const {languages, setLanguage} = this.context;
    debugger;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={this.navDetails}>{i18n.t('hello')}</Text>
        <Icon name="home" size={25} color="blue" />
      </View>
    );
  }
}

export default HomeScreen;
