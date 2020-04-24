import React from 'react'

const Imprimiendo_Propiedades = props => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={props.image} alt={props.title}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{props.title}</h3>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$ {props.price}</a>
            </div>
        </div>
    </article>
)

export default Imprimiendo_Propiedades