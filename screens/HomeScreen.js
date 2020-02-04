import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

class HomeScreen extends PureComponent {
  navDetails = () => {
    const {navigation} = this.props;
    navigation.navigate('Details');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={this.navDetails}>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
