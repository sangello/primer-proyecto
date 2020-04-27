import React from 'react';
/** import logo from './logo.svg'; */
/**import './App.css';*/
import "./Styles/Styles.scss";
import Banner from './Jsx/Banner';
import Formulario from './Jsx/Formulario';
import CourseGrid from './Jsx/CourseGrid';
import Course from './Jsx/Course';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom"

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
           * ----------- Clase 5.4 - Declarando Router y Rutas-------- 
           *  *) Se agrega switch para que no se repita la página 404 siempre
           *  *) la linea <Route path="/cursos/:id" exact  component={Course}/> es para que entrando
           *  a cada curso pueda ver su contenido.
           * 
           * ----------- Clase 5.5 - Parámetros de la ruta -------- 
           *  *) La linea <Route path="/cursos/:id" exact  component={Course}/>, linea (path="/cursos/:id")
           *  tiene parametros y se pone por arriba de la que no tiene parametros(path="/cursos")   
           *  para que no renderize el componente CourseGrid porque es un switch y renderiza de arriba
           *  para abajo.
           * 
           * ----------- Clase 5.6 - Parámetros de la ruta -------- 
           * propiedad math, toma todo lo que viene de la url
           * 
           *  ----------- Clase 5.7 - Componente Link -------- 
           * (Ver Recorriendo Arrays) - Un ancla en HTML para redireccionar es con <a> pero recarga la 
           * pagina. No es una single page aplication. Por eso 'react-router-dom' nos da una nuevo 
           * componente que se llama link
           * 
           * <a href={`/cursos/${id}`}>
           *     <img src={image} alt={title} />
           * </a>
           */}
        <Switch>
          <Route path="/" exact  component={Banner}/>
          <Route path="/cursos/:id" exact  component={Course}/>
          <Route path="/cursos" exact  component={CourseGrid}/>
          <Route path="/formulario" exact  component={ () => <Formulario name="Pagina de contacto"/> } />
          <Route component = { () => (
              <div className="ed-grid">Q
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
              </div>
            )} 
          />
        </Switch>
    </Router>

)

//const App = () => <h1>Hola mundo desde mi archivo App.js</h1>

export default App;
