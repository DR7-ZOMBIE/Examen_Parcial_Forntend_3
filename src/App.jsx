import { useState } from 'react'
import './App.css'
import Form from "./components/Form";

function App() {
  
  const [datos, setDatos] = useState([
    {
      id: 0,
      genero: "Rock",
      banda: "queennn"
    },
    {
      id: 1,
      genero: "Rap",
      banda: "tupacc"
    },
    {
      id: 2,
      genero: "Reggaeton",
      banda: "karol g"
    }
  ])


  return (
    <>
      <div className="App">
      <h1>Llena el Formulario con tu Genero y Banda Favorita:</h1>
      <Form
      datos = {datos}
      setDatos = {setDatos}
      />
    </div>
    </>
  )
}

export default App
