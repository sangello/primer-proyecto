import React from 'react';
/** import logo from './logo.svg'; */
/**import './App.css';*/
import "./Styles/Styles.scss";
import Banner from './Jsx/Banner';
import Formulario from './Jsx/Formulario';
import CourseGrid from './Jsx/CourseGrid';
import Course from './Jsx/Course';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom"
import MainMenu from './Jsx/MainMenu';
import Historial from './Jsx/Historial';

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
           * ----------- Clase 5.8 - Menu con NavLink -------- 
           *  Se agrega el componente MainMenu
           * Componente NavLink, el atributo activeClassName cambia la clase a "activo" cuando esta activo
           * 
           *  ----------- Clase 5.9 - Props de React Router (Match, location, history) --------
           * Se crea el componente Historial
           * match, location, history
           * 
           * ----------- Clase 6.1 - Atomic Design --------
           * https://bradfrost.com/blog/post/atomic-web-design/
           * Atoms, Molecules, Organisms, Templates,Pages
           * 
           * ------------ Clase 6.2 - Refactorizando código I --------------
           * Se reestructura el codigo
           * - Elimina app.test.js que no lo estamos utilizando
           * - Se renombra App.js por App.jsx para que todos los componentes tengan la misma estructura
           * Menos index.js que es el que hace el llamado al render.
           * - Eliminamos App.css ya que no lo estamos utilizando
           * - Eliminamos logo.svg y iindex.css que no estan siendo utilizados
           * - Poner toda la nomenclatura de los componentes en ingles.
           * - Renombramos el componentes Curso por CourseCard
           * 
           * ------------ Clase 6.3 - Refactorizando código II --------------
           * Opcion de orden de carpetas dentro del codigo.
           * - opcion1: Agrupar por funcionalidad 
           * -  src/Course/CoursePage.jsx
           * -  src/Course/CourseCard.jsx
           * -  src/Course/CourseGrid.jsx
           * - opcion2: Agruparlo segun Metodología Atomic Desing
           * -  src/Components
           *          Atoms, Molecules, Organisims, Templates, Pages
           */}
        <MainMenu />   
        <Switch>
          <Route path="/" exact  component={Banner}/>
          <Route path="/cursos/:id" exact  component={Course}/>
          <Route path="/cursos" exact  component={CourseGrid}/>
          <Route path="/historial" exact  component={Historial}/>
          <Route path="/historial/:valor" exact  component={Historial}/>
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
