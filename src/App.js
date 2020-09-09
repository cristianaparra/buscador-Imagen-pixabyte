import React, { useState, useEffect } from 'react';
import Formulario from './component/Formulario'
import ListadoImagenes from './component/ListadoImagenes'


function App() {

  const [busqueda, guardarBusqueda] = useState('')
  const [imagenes, guardarImagenes] = useState([]);
  useEffect(() => {

    const consultarApi = async () => {

      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const key = '18239276-d6d8b1cc88e822e4cec61a0e3';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits)
    }
    consultarApi()
  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">

        <p className='lead text-center'>Buscar Imagenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>


      <dic className='row justify-content-center'>
        <ListadoImagenes 
        imagenes={imagenes}
        />
      </dic>
    </div>
  );
}

export default App;
