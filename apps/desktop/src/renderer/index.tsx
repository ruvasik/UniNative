import React from 'react';

import ReactDOM from 'react-dom';
import { View } from 'react-native';

import { TestScreen } from '@uninative/ui';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TestScreen />
  </View>
);

ReactDOM.render(<App />, document.getElementById('root'));
