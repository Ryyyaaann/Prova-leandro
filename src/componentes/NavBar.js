import React from "react";
import '../css/Navbar.css'



function NavBar() {

    return(
        <div className="geralnav">
            <nav className="navs"> 
                <img className="logosenai" src={require('../assets/SENAI.png')} alt='logo'/>
                <ul className="itenul">
                <li className="itenli"><a href='/' className="itemlink"> Home </a></li>
                <li className="itenli"><a href='/contato' className="itemlink"> contato </a></li>
                <li className="itenli"><a href='/QuemSomos' className="itemlink"> Quem Somos</a></li>
                </ul>
            </nav>
        </div>
    )
    
}


export default NavBar;

