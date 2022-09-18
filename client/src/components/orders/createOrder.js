import React, {useEffect} from 'react';
import {
  Text,
  Layout,
  List,
  ListItem,
  Button,
  Card,
  Modal,
} from '@ui-kitten/components';
import {SafeAreaView, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import ButtonPrimary from '../../ui/button.ui';
import Spacer from 'react-styled-spacer';
import AddProductModal from './addProductModal';
import {SERVER_BASE_URL} from '../../constants';
import axios from 'axios';

const CreateOrder = ({navigation}) => {
  const renderItemAccessory = props => <Text category="s1">1</Text>;
  const [visible, setVisible] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.name}`}
      description={`₹${item.price}`}
      accessoryRight={renderItemAccessory}
    />
  );

  const getAllProducts = async () => {
    const res = await axios.get(`${SERVER_BASE_URL}/products`);

    if (res) {
      setProducts(res.data);
    }
  };

  const items = cart.map(item => item._id);
  const createOrder = async () => {
    await axios.post(`${SERVER_BASE_URL}/orders/create`, {
      price: total,
      customer: '63245e1261c79c6bd4fc0f9f',
      products: items,
      operator: '63244c79d33e9c65ab058c87',
    });

    setCart([]);
    setTotal([]);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <SafeAreaView>
      <Layout style={styles.layout}>
        <Spacer h="12" />

        <Text category="h2" style={styles.heading}>
          Create new order
        </Text>
        <Spacer h="36" />
        <ButtonPrimary
          val={'add item'}
          onPress={() => {
            setVisible(true);
          }}
        />

        <Spacer h="48" />

        <Card style={styles.list}>
          {cart.length ? (
            <List data={cart} renderItem={renderItem} />
          ) : (
            <Text>Please add items for checkout</Text>
          )}
        </Card>

        <Spacer h="12" />

        <Card style={styles.total}>
          <Layout style={styles.flexRow}>
            <Layout>
              <Text category="label">Total Amount:</Text>
            </Layout>
            <Layout>
              <Text category="label">₹{total}</Text>
            </Layout>
          </Layout>
        </Card>

        <Spacer h="24" />

        <Button status="primary" appearance="outline" onPress={createOrder}>
          checkout
        </Button>
      </Layout>

      <Modal
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        visible={visible}>
        <AddProductModal
          setTotal={setTotal}
          products={products}
          setCart={setCart}
          total={total}
          cart={cart}
          setVisible={setVisible}
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    height: '50%',
    width: '85%',
  },
  total: {
    width: '85%',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default CreateOrder;
