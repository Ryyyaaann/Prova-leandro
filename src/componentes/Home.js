import React from "react";
import '../css/Home.css'

function Home(){
    return(
        <div className="geralhome">
           <div className="textos ">
            <h1>Bem-vindo à Página Inicial da nossa AV2</h1>
            <p>Conheça os melhores Cosplays do SESI/SENAI</p>
            </div>
            <div className="infos">
            <div className="itensss">
            <img className="IMG1" src={require('../assets/FOTO3.jpg')} alt='logo'/>   
            <p>Povo da Turma da Mônica</p>
            </div>
            <div className="itensss">
            <img className="IMG2" src={require('../assets/FOTO6.jpg')} alt='logo'/>   
            <p>Foveiras e o Teatcher TOP!!!</p>
            </div>
            <div className="itensss"> 
            <img className="IMG3" src={require('../assets/FOTO7.jpg')} alt='logo'/>   
            <p>As Operadoras TIM e Claro + Flanelinha</p>
            </div>
            <div className="itensss"> 
            <img className="IMG4" src={require('../assets/FOTO5.jpg')} alt='logo'/>   
            <p>Tigrinho Man</p>
            </div>
            <div className="itensss">
            <img className="IMG5" src={require('../assets/FOTO4.jpg')} alt='logo'/>   
            <p>Dollynho e não sei as outras duas</p>
            </div>
            <div className="itensss">
            <img className="IMG6" src={require('../assets/HOME.jpg')} alt='logo'/>   
            <p>A Turma F#$% do SESI/SENAI</p>
            </div>
            </div>
        </div>
    )
}

export default Home;