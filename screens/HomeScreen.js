import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
    const {isRTL} = this.context;
    return (
      <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              bottom: '35%',
              alignSelf: !isRTL ? 'flex-end' : 'flex-start',
            }}>
            <ChangeLanguageBtn name="language" />
          </View>
          <Text onPress={this.navDetails}>{i18n.t('hello')}</Text>
          <Icon name="home" size={25} color="blue" />
        </View>
      </>
    );
  }
}

export default HomeScreen;
