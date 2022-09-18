import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import Authenticate from './src/pages/Authenticate';
import PaymentMethod from './src/components/orders/paymentMethod';

const App = () => {
  const [user, setUser] = useState();

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        {/* {user ? <HomeScreen /> : <Authenticate setUser={setUser} />} */}
        <HomeScreen />
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;
