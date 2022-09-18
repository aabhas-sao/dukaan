import React from 'react';
import useInputState from '../hooks/useInputState';
import ButtonPrimary from '../ui/button.ui';
import InputPrimary from '../ui/input.ui';
import {Layout, Text} from '@ui-kitten/components';
import {Image, StyleSheet} from 'react-native';
import Spacer from 'react-styled-spacer';
import miLogo from '../../assets/images/miLogo.png';

const SignIn = ({navigation}) => {
  const miIDInputState = useInputState();
  const passwordInputState = useInputState();

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Layout style={styles.layout}>
      <Image style={styles.logo} source={miLogo} />
      <Spacer h={48} />
      <Text category="h3">Sign In to Mi POS Service</Text>
      <Spacer h={54} />
      <InputPrimary label={'Mi ID'} primaryInputState={miIDInputState} />
      <Spacer h={24} />
      <InputPrimary label={'Password'} primaryInputState={passwordInputState} />
      <Spacer h={48} />

      <ButtonPrimary val={'sign in'} onPress={goToSignUp} />
      <Spacer h={24} />

      <Text>
        Don't have a Mi Dukaan account?{' '}
        <Text onPress={goToSignUp} status="primary" style={styles.highlight}>
          Sign up now
        </Text>
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
});

export default SignIn;
