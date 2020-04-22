import React from 'react'

const curso = {
    "title":"React desde cero",
    "image":"https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "price":"50 usd"
}

const Componente_Propiedades = () => (
    <article class="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={curso.image} alt={curso.title}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{curso.title}</h3>
            <div class="s-main-center">
                <a class="button--ghost-alert button--tiny" href="#">$ {curso.price}</a>
            </div>
        </div>
    </article>
)

export default Componente_Propiedades