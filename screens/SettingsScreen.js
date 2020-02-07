import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import LanguageContext from '../languageContext';
import i18n from 'i18n-js';

class SettingsScreen extends PureComponent {
  static contextType = LanguageContext;

  changeLanguage = lng => {
    const {navigation} = this.props;
    const {setLanguage} = this.context;
    setLanguage(lng);
    navigation.navigate('Home');
  };

  render() {
    const {languages, isRTL} = this.context;
    const availableLanguages = languages.filter(
      f =>
        f.languageCode === 'ar' ||
        f.languageCode === 'en' ||
        f.languageCode === 'fr',
    );

    return (
      <View style={styles.container}>
        <Text style={styles.language}>{i18n.t('change')}</Text>
        <FlatList
          data={availableLanguages}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text
                style={[
                  styles.languageOptions,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {textAlign: isRTL ? 'right' : 'left'},
                ]}
                onPress={() => this.changeLanguage(item.languageCode)}>
                {i18n.t(item.languageCode, {locale: item.languageCode})}
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
    top: '10%',
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
