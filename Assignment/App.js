import React from 'react'
import { useState, useEffect } from "react"
import './App.css';
import AddPro from './Products/AddPro';
import Header from './Products/Header';
import Pros from './Products/Pros';


function App(){
  const [showAddPro, setShowAddPro] = useState(false);

  const [pros, setPros] = useState([])

  useEffect(() => {
    const getPros = async () => {
      const dataFromServer = await fetchPros()
      setPros(dataFromServer)
    }

    getPros()
  }, [])

  const fetchPros = async () => {
    const res = await fetch('http://localhost:5000/pros/');
    const data = await res.json();
    return data;
  }

  const addPro = async (pro) => {

    const res = await fetch('http://localhost:5000/pros', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(pro)
    })

    const data = await res.json()
    setPros([...pros, data])

  }

  const deletePro = async (id) => {

    await fetch(`http://localhost:5000/pros/${id}`,{
      method: 'DELETE'
    })

  // updating the state...which excludes item whose id is passed
    setPros(pros.filter((pro) => pro.id !== id))
}



  return(
    <div className="container">
    <Header onAdd={ () => setShowAddPro(!showAddPro)} showAddPro={showAddPro}/>
      {showAddPro && <AddPro onAdd={addPro}/>}
      {pros.length > 0 ?
      <Pros
        pros={pros}
        onDelete={deletePro}
      />
      : 'No Products Available for Today'}
    </div>
  );
}

export default App;

