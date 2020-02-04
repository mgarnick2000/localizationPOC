import React, {PureComponent} from 'react';
import {View, Text, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ar: () => require('../translations/arabic.json'),
  en: () => require('../translations/english.json'),
  fr: () => require('../translations/french.json'),
};

const translate = (key, config) => i18n.t(key, config);
const setI18Config = () => {
  const fallback = {languageTag: 'en', isRTL: false};
  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  I18nManager.forceRTL(isRTL);

  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};
class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    setI18Config();
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18Config();
    this.forceUpdate();
  };
  navDetails = () => {
    const {navigation} = this.props;
    navigation.navigate('Details');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={this.navDetails}>Home Screen</Text>
        <Icon name="home" size={25} color="blue" />
        <Text>{translate('hello')}</Text>
      </View>
    );
  }
}

export default HomeScreen;
