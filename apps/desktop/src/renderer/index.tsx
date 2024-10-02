import React from 'react';

import ReactDOM from 'react-dom';
import { View } from 'react-native';

import { TestScreen } from '@uninative/ui';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => (
  <PaperProvider>
    <TestScreen />
  </PaperProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
