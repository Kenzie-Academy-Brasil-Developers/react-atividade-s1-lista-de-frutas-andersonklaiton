import './App.css';
import { useState } from 'react';

function App() {

  const [fruits, setFruits]= useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ])

  const frutas = fruits.map((item)=>{
    const itemFruta = item.name
    return (
      <>
        <li>{itemFruta}</li>
      </>
    )
  });

  const precoFrutas= fruits.reduce((act, acc)=>{
    return acc.price + act;
  },0);

  const filterRedFruits= ()=>{
     const filtrados = fruits.filter((item)=>{
       return item.color === "red"
     })
    setFruits(filtrados)
    return filtrados
  };
  

  return (
    <div className="App">
      <div className="App-header">
          <p>Preço total = {precoFrutas}</p>
          <ul>{frutas}</ul>
          <button onClick={filterRedFruits} className="onlyRed">Frutas Vermelhas</button>
      </div>
    </div>
  );
}

export default App;
