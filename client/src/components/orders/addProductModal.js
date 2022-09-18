import React from 'react';
import {StyleSheet} from 'react-native';
import Spacer from 'react-styled-spacer';
import {
  Card,
  Text,
  Layout,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import ButtonPrimary from '../../ui/button.ui';

const AddProductModal = ({
  cart,
  setCart,
  products,
  setTotal,
  total,
  setVisible,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const addProduct = () => {
    const item = products[selectedIndex - 1];
    setCart([...cart, item]);
    setTotal(total + item.price);
    setVisible(false);
  };

  return (
    <Card style={styles.container}>
      <Text category="h3">Select Product</Text>
      <Spacer h="48" />
      <Layout style={styles.container} level="1">
        <Select
          selectedIndex={selectedIndex}
          value={() => {
            return products.length ? (
              <Text>{products[selectedIndex - 1].name}</Text>
            ) : (
              <Text>'Select an option'</Text>
            );
          }}
          onSelect={index => {
            setSelectedIndex(index);
          }}>
          {products.map((item, idx) => (
            <SelectItem key={idx} title={item.name} />
          ))}
        </Select>
      </Layout>

      <Spacer h="36" />

      <ButtonPrimary val={'add product'} onPress={addProduct} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AddProductModal;
