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

const App = () => (

    <Router>
          {/** ----------- Clase 5.3 - Declarando Router y Rutas-------- */ }
          {/** Las clases anteriores estan en el archivo AppClaseHastaRouter.js*/ }
          {/** 
           * Notar que: el fragment <> </> se reemplazo por <Router> </Router>
           * Notar que:
           *    const App = () => ( ... )
           *        es lo mismo que 
           *    function App() { return ( ... );}
           * 
           */}

          <Route path="/" exact  component={Banner}/>
          <Route path="/cursos" exact  component={CourseGrid}/>
          <Route path="/formulario" exact  component={ () => <Formulario name="Pagina de contacto"/> } />
          <Route component = { () => (
              <div className="ed-grid">
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
              </div>
            )} 
          />
    </Router>

)

//const App = () => <h1>Hola mundo desde mi archivo App.js</h1>

export default App;
