import React, {Component} from 'react';
import LanguageContext from './languageContext';
import * as RNLocalize from 'react-native-localize';
import PropTypes from 'prop-types';
import {translationGetters, setI18Config} from './screens/helper';

class LanguageProvider extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };
  constructor(props) {
    super(props);
    const i18n = setI18Config();
    const setLanguage = lng => {
      i18n.locale = lng;
      this.setState({i18n, currentLanguage: lng});
    };
    this.state = {
      currentLanguage: i18n.locale,
      languages: RNLocalize.getLocales() || [],
      i18n,
      setLanguage,
    };
  }

  render() {
    const {children} = this.props;
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
