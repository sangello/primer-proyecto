import React from 'react'

const RecorriendoArrays = ({title, image, price, profesor}) => (
    <article className="card">
        <h3>RecorriendoArrays</h3>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <h4 className="center">{profesor}</h4>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://">$ {price}</a>
            </div>
        </div>
    </article>
)

export default RecorriendoArrays