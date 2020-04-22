import React from 'react';
import logo from './logo.svg';
/**import './App.css';*/
import "./Styles/Styles.scss";
import Curso from './Curso'
import CursoComponente_Propiedad from './Componente_Propiedades'
import CursoImprimiendo_Propiedades from './Imprimiendo_Propiedades'
import CursoImprimiendo_Propiedades1 from './Imprimiendo_Propiedades1'

function App() {
  return (
    /**
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit" <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
     */
    <>
    <div>
      <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="tu-imagen.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <CursoComponente_Propiedad />
      <CursoImprimiendo_Propiedades 
        title="Nuevo Curso de React desde cero"
        image="https://edteam-media.s3.amazonaws.com/specialities/original/56519662-7722-4e2e-958e-599a35ae4fb1.png"
        price="15 usd" 
      />
      <CursoImprimiendo_Propiedades1 
        title="Edicion Audiovisual"
        image="https://edteam-media.s3.amazonaws.com/specialities/original/10322ac1-7b43-4e12-9000-0c28e04178d6.png"
        price="30 usd" 
      />

    </div>
    </>
  );
  
  
}

//const App = () => <h1>Hola mundo desde mi archivo App.js</h1>

export default App;
