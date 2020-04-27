import React from 'react'
import PropTypes from 'prop-types' 


//{title,image,price} --> son las props
const PropTypesDefaultprops = ({title, image, price}) => (
    <article className="card">
        <h3>PropTypesDefaultprops</h3>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
         { 
            /*
            <img 
            src={image ? image : "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg"} 
            alt={title ? title : "No hay titulo"}
            /> 
            */
         }
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://">$ {price}</a>
            </div>
        </div>
    </article>
)

PropTypesDefaultprops.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string
}

PropTypesDefaultprops.defaultProps = {
    title: "No se encontró Título",
    image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
    price: "--"
}

export default PropTypesDefaultprops