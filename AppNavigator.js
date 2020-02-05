import React, {PureComponent} from 'react';
import {createAppContainer} from 'react-navigation';
import i18n from 'i18n-js';
import MainNavigator from './navigation';

const AppContainer = createAppContainer(MainNavigator);

class AppNavigator extends PureComponent {
  render() {
    const {t} = i18n;
    return <AppContainer screenProps={{t}} />;
  }
}
export default AppNavigator;
