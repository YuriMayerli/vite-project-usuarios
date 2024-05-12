import React from "react";
import "./DesarrolladorVista.css"

function DesarrolladorVista({len}){

return (
    <div className="lenvista">
        <h1>{len.ntitulo} </h1>
        <h2>{len.nnombre} </h2>
        <h2>{len.ndescripcion} </h2>

        <img src= {len.image} alt= {len.image + "image"} />



    </div>
)
}

export default DesarrolladorVista;