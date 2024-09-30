import React from 'react';

import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { TestScreen } from '@uninative/ui/src/screens/TestScreen';

function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TestScreen />
      </View>
    </PaperProvider>
  );
}

export default App;
