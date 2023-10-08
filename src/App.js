import logo from './logo.svg';
import './App.css';
import Add from './Add'
import { useState } from 'react';

function App() {
  const [item , setItems]= useState([]);
  const handleAdd = (newItem)=>{
    setItems(oldItems=> oldItems.concat(newItem));
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Add />
    </>
  );
}

export default App;
