import React, {PureComponent} from 'react';
import {View, Text, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import LanguageContext from '../languageContext';
import ChangeLanguageBtn from '../components/ChangeLngBtn';

class HomeScreen extends PureComponent {
  static contextType = LanguageContext;
  navDetails = () => {
    const {navigation} = this.props;
    navigation.navigate('Details');
  };
  render() {
    const {languages} = this.context;
    return (
      <>
        <View style={{flex: 0, alignItems: 'flex-end'}}>
          <ChangeLanguageBtn name="language" />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text onPress={this.navDetails}>{i18n.t('hello')}</Text>
          <Icon name="home" size={25} color="blue" />
        </View>
      </>
    );
  }
}

export default HomeScreen;
