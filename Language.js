import React, {Component} from 'react';
import LanguageContext from './languageContext';
import * as RNLocalize from 'react-native-localize';
import PropTypes from 'prop-types';
// import {I18nManager} from 'react-native';
import {translationGetters, setI18Config} from './screens/helper';
import {I18nManager} from 'react-native';

class LanguageProvider extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };
  constructor(props) {
    super(props);
    const i18n = setI18Config();
    const setLanguage = lng => {
      i18n.locale = lng;
      const rtlLanguage = RNLocalize.findBestAvailableLanguage(i18n.locale);
      this.setState({i18n, currentLanguage: lng, isRTL: rtlLanguage.isRTL});
      console.log(this.state);
    };
    this.state = {
      currentLanguage: i18n.locale,
      languages: RNLocalize.getLocales() || [],
      i18n,
      setLanguage,
      isRTL: false,
    };
  }

  render() {
    const {children} = this.props;
    console.log(this.state);
    return (
      <LanguageContext.Provider
        value={{
          ...this.state,
        }}>
        {children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
