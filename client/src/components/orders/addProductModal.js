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

const AddProductModal = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Card style={styles.container}>
      <Text category="h3">Select Product</Text>
      <Spacer h="48" />
      <Layout style={styles.container} level="1">
        <Select
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>
      </Layout>

      <Spacer h="36" />

      <ButtonPrimary val={'add product'} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AddProductModal;
