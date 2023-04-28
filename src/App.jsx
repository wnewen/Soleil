import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewsPage from './pages/NewsPage'
import Category from './pages/Category'
import Product from './pages/Product'
import { HelmetProvider } from 'react-helmet-async'
// import { darkTheme, lightTheme } from './theme';
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="products">
                <Route path="category/:categoryName" element={<Category />} />
                <Route path="id/:productId" element={<Product />} />
              </Route>

            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
