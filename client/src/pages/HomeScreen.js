import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import CreateOrder from '../components/orders/createOrder';
import TrackOrder from '../components/orders/trackOrder';
import OrderScreen from '../components/orders/orderScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeScreen = () => {
  const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="New Order" />
      <BottomNavigationTab title="Track" />
    </BottomNavigation>
  );

  return (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen
        name="Create"
        options={{headerShown: false}}
        component={OrderScreen}
      />
      <Screen
        name="Track"
        options={{headerShown: false}}
        component={TrackOrder}
      />
    </Navigator>
  );
};

export default HomeScreen;
