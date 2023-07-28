import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from '/Users/camila/miproyecto/src/components/Main/Main.js' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Headers from '/Users/camila/miproyecto/src/components/Headers/Headers.js'




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