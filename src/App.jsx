import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { feedProducts } from './api';
// feedProducts();

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
    </QueryClientProvider>
  )
}

export default App
