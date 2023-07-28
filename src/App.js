import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from './Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  
  return (
    
    <div className="app">
      <Main />
     <ItemListContainer greeting="Productos:"/>
      <NavBar/>
     
    </div>
      
   
  );
}

export default App;