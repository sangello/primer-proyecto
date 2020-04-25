import React from 'react';
/** import logo from './logo.svg'; */
/**import './App.css';*/
import "./Styles/Styles.scss";
import Curso from './Jsx/Curso'
import ComponentePresentacionales from './Jsx/ComponentePresentacionales'
import ImprimiendoPropiedades from './Jsx/ImprimiendoPropiedades'
import ImprimiendoPropiedades1 from './Jsx/ImprimiendoPropiedades1'
import PropTypesDefaultprops from './Jsx/PropTypesDefaultprops'
import RecorriendoArrays from './Jsx/RecorriendoArrays';
import Banner from './Jsx/Banner';
import Formulario from './Jsx/Formulario';

const Cursos = [
  { "title" : "Java Desde 0",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/50668a3f-3a6e-4e24-80ff-dd5bea441559.jpg",
    "price" :  "120 USD"} , 
  { "title" : "PHP Desde 0",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/5ec26692-8451-4297-a59a-adb1829a90e8.jpg",
    "price" :  "20 USD"} , 
  { "title" : "GO Desde 0",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    "price" :  "120 USD"} , 
  { "title" : "SEO Desde 0",
    "image" : "https://edteam-media.s3.amazonaws.com/courses/original/9828742f-4da6-426e-80c9-e5081cc7f7a9.png",
    "price" :  "20 USD"} , 
]

function App() {
  return (
    <>
    <Banner />
    <div className="ed-grid m-grid-3">
      <Curso />
      <ComponentePresentacionales/>
      <ImprimiendoPropiedades 
      //Componente presentacional - Se limita a mostrarse en la interfaz.
        title="Nuevo Curso de React desde cero"
        image="https://edteam-media.s3.amazonaws.com/specialities/original/56519662-7722-4e2e-958e-599a35ae4fb1.png"
        price="15 usd" 
      />
      <ImprimiendoPropiedades1 
        //Componente presentacional - Se limita a mostrarse en la interfaz.
        title="Edicion Audiovisual"
        image="https://edteam-media.s3.amazonaws.com/specialities/original/10322ac1-7b43-4e12-9000-0c28e04178d6.png"
        price="30 usd" 
      />
     <PropTypesDefaultprops 
        //Componente presentacional - Se limita a mostrarse en la interfaz.
        price="30 usd" 
      />

      {
        Cursos.map ( 
          c => <RecorriendoArrays title={c.titulo} image={c.image} price={c.price}/>  
           )
      }

    
    </div>
    <div className="l-section">
      <Formulario />
    </div>
    </>
  );
  
  
}

//const App = () => <h1>Hola mundo desde mi archivo App.js</h1>

export default App;
