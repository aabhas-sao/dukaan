import React from 'react';
import SignIn from './SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp';

const Stack = createNativeStackNavigator();

const Authenticate = ({setUser}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn">
        {props => <SignIn {...props} setUser={setUser} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Authenticate;
