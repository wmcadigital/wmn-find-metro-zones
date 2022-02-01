import React from 'react';
import ContextProvider from 'globalState/ContextProvider';
import MetroZoneFinder from '../MetroZoneFinder/MetroZoneFinder';

function App() {
  return (
    <ContextProvider>
      <MetroZoneFinder />
    </ContextProvider>
  );
}

export default App;
