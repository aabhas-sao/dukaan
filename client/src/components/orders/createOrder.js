import React from 'react';
import {
  Text,
  Layout,
  List,
  ListItem,
  Button,
  Card,
  Modal,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import ButtonPrimary from '../../ui/button.ui';
import Spacer from 'react-styled-spacer';
import AddProductModal from './addProductModal';

const data = new Array(8).fill({
  title: 'iPhone 13',
  description: '$100',
});

const CreateOrder = () => {
  const renderItemAccessory = props => <Text category="s1">1</Text>;
  const [visible, setVisible] = React.useState(false);

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryRight={renderItemAccessory}
    />
  );

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
          <List data={data} renderItem={renderItem} />
        </Card>

        <Spacer h="12" />

        <Card style={styles.total}>
          <Layout style={styles.flexRow}>
            <Layout>
              <Text category="label">Total Amount:</Text>
            </Layout>
            <Layout>
              <Text category="label">200</Text>
            </Layout>
          </Layout>
        </Card>

        <Spacer h="24" />

        <Button status="primary" appearance="outline">
          checkout
        </Button>
      </Layout>

      <Modal
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        visible={visible}>
        <AddProductModal />
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
    maxHeight: '50%',
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
