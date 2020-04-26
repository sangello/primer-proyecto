import React , {Component} from 'react'

// Al poner {Component} arriba evitamos poner React.Component luego del extends de la clase
//Componente de Clase
class Formulario extends Component {

    //1 -- El Contructor es el Primer Metodo que se ejecuta
    constructor(props){
        //Toda la logica que se quiere hacer antes de renderizar el componente se hace en el contructor.
        super(props)

        //Inicializo el estado del objeto con el que voy a trabajar.
        this.state = {
            nombre: "",
            correo: ""
        }

        //bind: es para enlazar el metodo cambiarNombre con el this 
        //de esta clase para que pueda ser utilizado
        this.cambiarNombre = this.cambiarNombre.bind(this)
    }

    cambiarNombre (e) {
        this.setState({
            nombre: e.target.value
        })
    }

    //2 -- El Render es el Segundo Metodo que se ejecuta --> Se renderiza
    render(){
        return (
 

        <div className="ed-grid">
            <h1>Formulario {this.props.name}</h1>
            <form action=""  id="elemento">
                <div className="ed-grid m-grid-2">
                    <div className="form__item">
                        <label>Nombre Completo</label>
                        {/** 2da Forma de hacerlo*/ }
                        <input type="text"
                            onChange={this.cambiarNombre
                        }/>
                    </div>
                    <div className="form__item">
                        <label>Correo electrónico</label>
                        {/** 1da Forma de hacerlo*/ }
                        <input type="email"
                            onChange={ e => this.setState({
                            correo: e.target.value
                        })}/>
                    </div>
                    
                    <div className="form__item">
                        <button className="button full" type="submit" value="Enviar">Enviar</button>
                    </div>
                </div>    
            </form>
            <div>
                    <h2> {`hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
            </div>
        </div>
        )
    }

    //3 -- El componentDidMount es el Tercer Metodo que se ejecuta. Ya estas seguro que el render
    // esta en el DOM y ya puedo manipular los elementos.
    componentDidMount (){
        let elemento = document.getElementById("elemento")
        console.log(elemento)

    }

}

export default Formulario