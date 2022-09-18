import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Radio,
  RadioGroup,
  Text,
  Modal,
  Spinner,
  Layout,
  Card,
} from '@ui-kitten/components';
import {PAYMENT_STATUS} from '../../constants';
import ButtonPrimary from '../../ui/button.ui';
import Spacer from 'react-styled-spacer';
import {StackActions} from '@react-navigation/native';
import SuccessImage from '../../../assets/images/success.webp';

const popAction = StackActions.pop(2);
const PaymentMethod = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [paymentStatus, setPaymentStatus] = React.useState(
    PAYMENT_STATUS.PENDING,
  );

  const [visible, setVisible] = React.useState(false);

  function timeout(fn, ms) {
    return new Promise(resolve => setTimeout(fn, ms));
  }

  const pay = async () => {
    setVisible(true);
    setPaymentStatus(PAYMENT_STATUS.PENDING);
    await timeout(async () => {
      setPaymentStatus(PAYMENT_STATUS.PAID);

      await timeout(async () => {
        setVisible(false);

        await timeout(() => {
          navigation.dispatch(popAction);
        }, 2000);
      }, 2000);
    }, 3000);
  };

  return (
    <Layout style={styles.layout}>
      <Text style={styles.center} category="h4">
        Select Payment Method
      </Text>
      <Spacer h={24} />
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index => setSelectedIndex(index)}>
        <Radio>Credit Card</Radio>
        <Radio>Debit Cart</Radio>
        <Radio>UPI</Radio>
        <Radio>Cash</Radio>
      </RadioGroup>

      <Modal
        style={styles.modal}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        visible={visible}>
        <Card style={styles.card}>
          {paymentStatus === PAYMENT_STATUS.PENDING ? (
            <Spinner status="primary" />
          ) : (
            <Layout style={styles.flexCol}>
              <Image style={styles.image} source={SuccessImage} />
              <Text category="h5" status="success">
                Payment Succesful
              </Text>
            </Layout>
          )}
        </Card>
      </Modal>
      <Spacer h={24} />

      <ButtonPrimary val={'proceed'} onPress={pay} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  center: {
    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '70%',
    height: '50%',
  },
  image: {
    width: 150,
    height: 150,
  },
  flexCol: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default PaymentMethod;
