import React from 'react';
import {Button} from '@ui-kitten/components';

const ButtonPrimary = ({val, onPress}) => {
  return (
    <Button status="primary" onPress={onPress}>
      {val}
    </Button>
  );
};

export default ButtonPrimary;
