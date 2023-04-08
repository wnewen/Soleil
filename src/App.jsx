import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import { HelmetProvider } from 'react-helmet-async'


function App() {
  const [count, setCount] = useState(0)

  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="products/id/:productID" eleElement={<Product />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
