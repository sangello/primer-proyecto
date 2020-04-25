import React , {Component} from 'react'

// Al poner {Component} arriba evitamos poner React.Component luego del extends de la clase
//Componente de Clase
class Formulario extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (

            <div className="ed-grid">
                <h1>Formulario</h1>
            </div>
        )
    }

}

export default Formulario