import React from 'react'
const mayorDeEdad = edad => edad > 18
const persona = {"nombre":"Sebastian", "apellido":"Angellotti", "edad":"15"}

const Curso = () => (
    <article class="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png" alt="Curso Go"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">

            <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src="https://edteam-media.s3.amazonaws.com/users/avatar/f2db2437-1baf-481d-9f3a-04ba848008a7.jpg" alt="Profesor"/>
                </div>
                </div>
                <span className="small">{ `${persona.nombre} ${persona.apellido}`}</span>
                <span className="small">{
                    mayorDeEdad(persona.edad)?
                    <div>
                        <h1>
                            <span>"Soy mayor de Edad"</span>
                        </h1>
                    </div>
                    : <p>"Soy Menor"</p>
                 }</span>
            </div>
            </div>
            <div class="s-main-center">
            <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
        </div>
    </article>
)

export default Curso