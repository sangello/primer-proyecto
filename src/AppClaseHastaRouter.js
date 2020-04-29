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
import CourseGrid from './Jsx/CourseGrid';
import { BrowserRouter as Router , Route} from "react-router-dom"

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

      {/** ----------- Clase 1.4 -------- */}
          {/** 1) Creacion del proyecto npx create-react-app primer-proyecto */ }

      {/** ----------- Clase 1.6 -------- */}
          { /** 1) Comando npm start para levantar el proyecto */ }

      {/** ----------- Clase 2.1 -------- */}
          { /**  Comando para agregar dependencias npm add ed-grid edteam-style-guides node-sass
          * estoy agregando esas 3 dependencias todo junto en una linea
          * Direcciones utiles: https://ux.ed.team/ , https://ed-grid.com/ **/}
    
      {/** ----------- Clase 2.4 -------- */}
          {/**
          *  Reglas JSX
          *  1: Todas las etiquetas deben cerrarse
          *  2: Los componentes deben devolver un solo elemento padre
          *  3: Apoyarse de los Fragmente <> </> cuando necesito devolver 2 elementos
          *  4: Fragment => <> hijos </>
          *  5: img siempre se cierra
          *  6: class => className
          *  7: for => htmlFor
          */}
     
      {/** ----------- Clase 3.1 -------- */}
          {/**
          *  git status                --> Se fija el status
          *  git add.                  --> agrega a git todo lo que esta en la carpeta
          *  git commit -m ""          --> hace commit y agrega un mensaje en el commit
          *  git push -u origin master --> lo sube al repositorio de internet
          * 
          * 1) Ir a https://github.com
          * 2) Hacer click en el boton new dentro de la pagina de github completar lo que pide
          * 3) aparece una pagin en donde dice lo siguiente para agregar un proyecto ya creado a github
          *         push an existing repository from the comand line
          *    git remote add origin git@github.com:xxxx/xxxx.git
          *    git push -u origin master 
          * cree el siguiente Proyecto --> https://github.com/sangello/primer-proyecto
          */ }

      {/** ----------- Clase 3.2 -------- */ }
          {/** Expresiones Matematicas */}
          <Curso />
    
      {/** ----------- Clase 3.4 -------- */ }  
          {/** Imprimiento propiedades */}
          <ImprimiendoPropiedades 
            title="Nuevo Curso de React desde cero"
            image="https://edteam-media.s3.amazonaws.com/specialities/original/56519662-7722-4e2e-958e-599a35ae4fb1.png"
            price="15 usd" 
          />
        
          <ImprimiendoPropiedades1 
            title="Edicion Audiovisual"
            image="https://edteam-media.s3.amazonaws.com/specialities/original/10322ac1-7b43-4e12-9000-0c28e04178d6.png"
            price="30 usd" 
          />
        
      {/** ----------- Clase 3.5 -------- */ }  
          {/** Componente presentacional - Se limita a mostrarse en la interfaz. */}
          <ComponentePresentacionales/>
   
    
      {/** ----------- Clase 3.6 -------- */ }
          <PropTypesDefaultprops 
            price="30 usd" 
          />
      
      {/** ----------- Clase 3.7 -------- */ }
        {
          Cursos.map ( (c , index) => <RecorriendoArrays key={index} titulo={c.titulo} image={c.image} price={c.price}/> )
        }
        
    </div>

      {/** ----------- Clase 4 -------- */ }
          {/** Creando un componente de Clase*/}
          <div className="l-section">
            {/** <Formulario nombre="Juan jose" correo="Juan@gmail.com"/>*/}
            <Formulario name="de Bienvenida"/>
          </div>
        
      {/** ----------- Clase 5 -------- */ }
        <CourseGrid />
    

      {/** ----------- Clase 5.2 -------- */ }
          {/** Se instala React router 
           *  1- Se va a la carpeta del proyecto
           *  2- npm add react-router-dom 
           */}
    

      {/** ----------- Clase 5.3 - Declarando Router y Rutas-------- */ }
      {/** Las clases Posteriores se encuentran en App.js*/ }


     
    </>
);}

//const App = () => <h1>Hola mundo desde mi archivo App.js</h1>

export default App;
