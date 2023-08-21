import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/componentes/NavBar/NavBar'
import Footer from './componentes/componentes/Footer'
import ItemListContainer from './componentes/componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/componentes/ItemDetailContainer/ItemDetailContainer'



function App() {
  
  return (
    
    <div className="app">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
       </BrowserRouter>
    </div>
      
   
  );
}

export default App;