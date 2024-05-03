import React from "react";
import '../css/Footer.css'

function Footer(){
    return(
        <div className="geralfot">
            <footer className="foot">
            <img className="logosesi" src={require('../assets/SESI.png')} alt='logo'/>
            <p className="ttts"> © 2024 Todos os direito reservados ao povo do 3°/informatica para internet.</p>
            <p className="ttts">Contato: osmelhores@sesisenai.com</p>
            </footer>
        </div>
    )
}

export default Footer