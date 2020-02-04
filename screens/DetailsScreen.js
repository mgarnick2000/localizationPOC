import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class DetailsScreen extends PureComponent {
  navHome = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={this.navHome}>Details Screen</Text>
        <Icon name="details" size={25} color="blue" />
      </View>
    );
  }
}

export default DetailsScreen;
