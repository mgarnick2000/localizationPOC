import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import LanguageContext from '../languageContext';
import i18n from 'i18n-js';
import {I18Manager} from 'react-native';
import {setI18Config} from './helper';

class SettingsScreen extends PureComponent {
  static contextType = LanguageContext;


  changeLanguage = lng => {
    const {navigation} = this.props;
    const {setLanguage, isRTL} = this.context;
    console.log(this.context);
    setLanguage(lng);
    I18nManager.forceRTL(isRTL);
    navigation.navigate('Home');
  };

  render() {
    const {languages, setLanguage} = this.context;
    const availableLanguages = languages.filter(
      f =>
        f.languageCode === 'ar' ||
        f.languageCode === 'en' ||
        f.languageCode === 'fr',
    );

    return (
      <View style={styles.container}>
        <Text style={styles.language}>Change Language</Text>
        <FlatList
          data={availableLanguages}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text
                style={styles.languageOptions}
                onPress={() => this.changeLanguage(item.languageCode)}>
                {item.languageCode}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, idx) => item.languageTag}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  language: {
    paddingTop: 10,
    textAlign: 'center',
  },
  languageOptions: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default SettingsScreen;
