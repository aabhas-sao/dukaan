import React from 'react';
import {Text, Layout, Divider} from '@ui-kitten/components';
import Spacer from 'react-styled-spacer';
import useInputState from '../../hooks/useInputState';
import {StyleSheet} from 'react-native';
import InputPrimary from '../../ui/input.ui';
import {PAYMENT_METHOD_SCREEN} from '../../constants';
import ButtonPrimary from '../../ui/button.ui';

const CustomerDetails = ({navigation}) => {
  const emailInputState = useInputState();
  const firstNameInputState = useInputState();
  const lastNameInputState = useInputState();
  const operatorIDState = useInputState();
  // const phoneNoState = useInputState();
  const storeIDState = useInputState();

  const goToPaymentMethodPage = () => {
    navigation.navigate(PAYMENT_METHOD_SCREEN);
  };
  return (
    <Layout style={styles.layout}>
      <Text category="h3">Enter Customer Details</Text>
      <Spacer h={54} />

      <InputPrimary label={'Operator ID'} primaryInputState={operatorIDState} />
      <Spacer h={18} />

      <Divider />

      <InputPrimary label={'Email'} primaryInputState={emailInputState} />
      <Spacer h={18} />

      <Spacer h={18} />

      <InputPrimary
        label={'First name'}
        primaryInputState={firstNameInputState}
      />
      <Spacer h={18} />
      <InputPrimary
        label={'Last name'}
        primaryInputState={lastNameInputState}
      />
      <Spacer h={18} />
      <InputPrimary label={'Store ID'} primaryInputState={storeIDState} />

      <Spacer h={36} />

      <ButtonPrimary val={'complete payment'} onPress={goToPaymentMethodPage} />
    </Layout>
  );
};

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

export default CustomerDetails;
