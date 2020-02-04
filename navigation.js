import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);
