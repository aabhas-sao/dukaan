import React from 'react';
import useInputState from '../hooks/useInputState';
import ButtonPrimary from '../ui/button.ui';
import InputPrimary from '../ui/input.ui';
import {Layout, Text} from '@ui-kitten/components';
import {Image, ScrollView, StyleSheet} from 'react-native';
import Spacer from 'react-styled-spacer';
import miLogo from '../../assets/images/miLogo.png';

// Todo: add mi store type

const SignUp = ({navigation}) => {
  const emailInputState = useInputState();
  const firstNameInputState = useInputState();
  const lastNameInputState = useInputState();
  const storeIDInputState = useInputState();
  const posIDInputState = useInputState();

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <Layout style={styles.layout}>
        <Image style={styles.logo} source={miLogo} />
        <Spacer h={48} />
        <Text category="h3">Welcome to Mi POS Service</Text>
        <Spacer h={54} />
        <InputPrimary label={'Email'} primaryInputState={emailInputState} />
        <Spacer h={24} />
        <InputPrimary
          label={'First name'}
          primaryInputState={firstNameInputState}
        />
        <Spacer h={24} />
        <InputPrimary
          label={'Last name'}
          primaryInputState={lastNameInputState}
        />
        <Spacer h={24} />
        <InputPrimary
          label={'Store ID'}
          primaryInputState={storeIDInputState}
        />
        <Spacer h={24} />
        {/* Todo: add machine type to pos id */}
        <InputPrimary label={'POS ID'} primaryInputState={posIDInputState} />
        <Spacer h={48} />
        <ButtonPrimary val={'sign up'} />

        <Spacer h={24} />

        <Text>
          Already have a Mi Dukaan account?{' '}
          <Text onPress={goToSignIn} status="primary" style={styles.highlight}>
            Sign in
          </Text>
        </Text>
      </Layout>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  layout: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
});
