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
import store from './redux/store';


function App() {
  const [count, setCount] = useState(0)

  return (
      <Provider store={store}>
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
      </Provider>
  )
}

export default App
