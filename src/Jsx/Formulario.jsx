import React , {Component} from 'react'

// Al poner {Component} arriba evitamos poner React.Component luego del extends de la clase
//Componente de Clase
class Formulario extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
 

            <div className="ed-grid m-grid-1">
                <h1>Formulario</h1>
                <div className="form__item">
                    <label>Nombre Completo</label>
                    <input type="text" name="" id=""/>
                </div>
                <div className="form__item">
                    <label>Correo electrónico</label>
                    <input type="email" name="" id=""/>
                </div>
                <div className="form__item">
                    <button className="button full" type="submit" value="Enviar">Enviar</button>
                </div>
            </div>
        )
    }

}

export default Formulario