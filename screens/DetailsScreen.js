import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import i18n from 'i18n-js';
import ChangeLanguageBtn from '../components/ChangeLngBtn';
import LanguageContext from '../languageContext';
class DetailsScreen extends PureComponent {
  static contextType = LanguageContext;
  navHome = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  };
  render() {
    const {isRTL} = this.context;
    return (
      <>
        <View style={{flex: 0, alignItems: !isRTL ? 'flex-end' : 'flex-start'}}>
          <ChangeLanguageBtn name="language" />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text onPress={this.navHome}>{i18n.t('details')}</Text>
          <Icon name="details" size={25} color="blue" />
        </View>
      </>
    );
  }
}

export default DetailsScreen;
