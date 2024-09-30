import React from 'react';

import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { TestScreen } from '@uninative/ui';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TestScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
