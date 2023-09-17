import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext'
import NavBar from './componentes/componentes/NavBar'
import ItemListContainer from './componentes/componentes/ItemListContainer'
import ItemDetailContainer from './componentes/componentes/ItemDetailContainer'
import Cart from './componentes/componentes/Cart'
import Checkout from './componentes/componentes/Checkout'
import Footer from './componentes/componentes/Footer'


function App() {
  
  return (
    
    <div className="app">
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
      </CartProvider>
       </BrowserRouter>
    </div>
      
   
  );
}

export default App;