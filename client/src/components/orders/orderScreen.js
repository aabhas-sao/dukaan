import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateOrder from './createOrder';
import PaymentMethod from './paymentMethod';
import CustomerDetails from '../customers/customerDetails';

const Stack = createNativeStackNavigator();

const OrderScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="CreateOrder"
        component={CreateOrder}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="PaymentMethod"
        component={PaymentMethod}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CustomerDetails"
        component={CustomerDetails}
      />
    </Stack.Navigator>
  );
};

export default OrderScreen;
