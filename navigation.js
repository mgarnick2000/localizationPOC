import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import i18n from 'i18n-js';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: i18n.t('home', {order: 1}),
        headerShown: false,
      }),
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        title: i18n.t('details', {order: 2}),
        headerShown: false,
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: i18n.t('settings', {order: 3}),
        headerShown: false,
      }),
    },
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(MainNavigator);
