import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchVehiclesScreen from './src/screens/SearchVehiclesScreen';
import VehicleDetailScreen from './src/screens/VehicleDetailScreen';

const navigator = createStackNavigator({  
  SearchVehicles: {
    screen: SearchVehiclesScreen,
    navigationOptions: ({navigation}) => (
      {
      title: 'Search Vehicles'
    }),
  },
  VehicleDetail: {
    screen: VehicleDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Vehicle Details',
    }),
  }
},
  {
    initialRouteName: 'SearchVehicles',
    defaultNavigationOptions: {
      title: 'NSW Vehicles'
    }
  }
);

export default createAppContainer(navigator);
