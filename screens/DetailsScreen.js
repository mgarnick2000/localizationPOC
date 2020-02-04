import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

class DetailsScreen extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default DetailsScreen;
