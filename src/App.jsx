import React, { useState, useEffect } from 'react'
import Products from './Products';
import data from './product.json'
import { ProductContext } from './ProductContext';

function App() {

  return (
    <div className='bg-secondary-subtle'>
      <header className="bg-primary text-center">
        <h1>Cart</h1>
      </header>
      {/* Context API provoider */}
      <ProductContext.Provider value={data}>
        <Products />
      </ProductContext.Provider>
    </div>
  )
};

export default App