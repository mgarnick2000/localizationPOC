import React, {Component} from 'react';
import LanguageContext from './languageContext';
import * as RNLocalize from 'react-native-localize';
import PropTypes from 'prop-types';
import {setI18Config} from './screens/helper';

class LanguageProvider extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };
  constructor(props) {
    super(props);
    const i18n = setI18Config();
    const languages = RNLocalize.getLocales();
    const setLanguage = lng => {
      i18n.locale = lng;
      const isRTL = languages.find(f => f.languageCode === lng).isRTL;
      this.setState({i18n, currentLanguage: lng, isRTL});
    };
    this.state = {
      currentLanguage: i18n.locale,
      languages,
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
