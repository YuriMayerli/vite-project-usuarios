
import './App.css'
import Card from './componentes/Card'
import desarrolladores from './datos/desarrolladores'

function App() {

const ListasLenguajes = desarrolladores.map((l,index)  =>{

  return <Card key={index} titulo={l.ntitulo} nombre={l.nnombre} descripcion={l.ndescripcion}  />
} 

)
  
  return (
   <div className='App'>
    <h1> Programadores </h1>
    <div className='container'>
      {ListasLenguajes}

   
    </div>
   </div>




  )
}

export default App
