import React from 'react';
import {Input, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import Spacer from 'react-styled-spacer';

const InputPrimary = ({label, placeholder, primaryInputState, hideLabel}) => {
  return (
    <>
      {hideLabel ? <></> : <Text style={styles.label}>{label}</Text>}
      <Spacer h={12} />
      <Input placeholder={placeholder} {...primaryInputState} />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
  },
});

export default InputPrimary;
