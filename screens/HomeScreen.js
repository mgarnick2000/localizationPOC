import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends PureComponent {
  navDetails = () => {
    const {navigation} = this.props;
    navigation.navigate('Details');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={this.navDetails}>Home Screen</Text>
        <Icon name="home" size={25} color="blue" />
      </View>
    );
  }
}

export default HomeScreen;
