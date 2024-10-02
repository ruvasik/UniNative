import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';

import { TestScreen } from '@uninative/ui/src/screens/TestScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <TestScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
