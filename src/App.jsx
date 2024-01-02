import Products from './Products';
import { UserContextProvider } from './context/ProductContext';

function App() {

  return (
    <div className='bg-secondary-subtle'>
      {/* Header */}
      <header className="bg-primary text-center">
        <h1>Cart</h1>
      </header>
      {/* Context API provoider */}
      <UserContextProvider>
        <Products />
      </UserContextProvider>
    </div>
  )
};

export default App