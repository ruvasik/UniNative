import React from 'react';

import { Text, View } from 'react-native';

import { Button } from '../elements/Button/Button';

export const TestScreen: React.FC = () => {
  const [flag, setFlag] = React.useState(false);

  const onPress = () => {
    setFlag((old) => !old);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Button is {flag ? 'pressed' : 'no'}</Text>
      <Button title="test" onPress={onPress} />
    </View>
  );
};
