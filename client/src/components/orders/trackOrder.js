import React, {useEffect} from 'react';
import {
  Text,
  List,
  ListItem,
  Layout,
  Modal,
  Card,
  Divider,
} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from 'react-native';
import Spacer from 'react-styled-spacer';

import axios from 'axios';
import {SERVER_BASE_URL} from '../../constants';
import ButtonPrimary from '../../ui/button.ui';

const TrackOrder = () => {
  const [orders, setOrders] = React.useState([]);
  const [visible, setVisible] = React.useState();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const renderItemAccessory = index => (
    <ButtonPrimary
      val={'show'}
      onPress={() => {
        setSelectedIndex(index);
        setVisible(true);
      }}
    />
  );

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${SERVER_BASE_URL}/orders`);
      setOrders(res.data);
    })();
  }, []);

  const renderItem = ({item, index}) => (
    <ListItem
      title={`order no: ${item._id}`}
      description={`order value: ₹${item.price}`}
      accessoryRight={() => {
        return renderItemAccessory(index);
      }}
    />
  );

  return (
    <SafeAreaView>
      <Layout style={styles.layout}>
        <Text style={styles.heading} category="h4">
          Track Orders
        </Text>
        <Spacer h={12} />
        <List style={styles.list} data={orders} renderItem={renderItem} />
        <Modal
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}
          visible={visible}>
          {selectedIndex !== -1 ? (
            <Card>
              <Text>Order No: {orders[selectedIndex]._id}</Text>
              <Text>Amount: {orders[selectedIndex].price}</Text>
              <Spacer h="6" />
              <Divider />
              <Spacer h="8" />

              <Text>Items</Text>
              <Spacer h="12" />
              {orders[selectedIndex].products.map((item, idx) => {
                return <Text key={idx}>{item.name}</Text>;
              })}

              <Spacer h="48" />
              <ButtonPrimary
                val={'close'}
                onPress={() => {
                  setVisible(false);
                }}
              />
            </Card>
          ) : (
            <></>
          )}
        </Modal>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {height: '100%'},
  heading: {
    textAlign: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  list: {
    height: '90%',
  },
});

export default TrackOrder;
