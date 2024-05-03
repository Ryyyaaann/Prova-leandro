import React from "react";
import '../css/Contato.css'


function Formss(){
    return (
        <div>
        <div className="formulario-container">
        <form className="formulario">
        <div className="boxw">
        <legend>Quem você deseja contactar?</legend>
        <div className="input-group">
        <input type="text" name="nome" placeholder="Digite o seu nome" />
        </div>
        <div className="input-group">
        <input type="number" name="numPessoas"
        placeholder="Quantidade de pessoas" />
        </div>
            <div className="input-group">
                <input type="email" name="email" placeholder="Digite o seu 
                email" />
            </div>
            <div className="input-group">
                <label htmlFor="dtaNascimento">Data que você quer ver a pessoa</label>
            <input type="date" id="dtaNascimento" name="dtaNascimento" />
            </div>
            </div>
            <div className="check">
            <legend>Complete a frase: "Filho de cabaço, cabaço 
            ___"</legend>
            <div className="checkbox-group">
            <input type="checkbox" id="fixacao" name="frase" value="é" />
            <label htmlFor="fixacao">é</label>
            </div>
            <div className="checkbox-group">
            <input type="checkbox" id="projecao" name="frase" value="tem"
            />
            <label htmlFor="projecao">Jamais será cabaço</label>
            </div>
            <div className="checkbox-group">
            <input type="checkbox" id="cheiro" name="frase" value="verde"
            />
            <label htmlFor="cheiro">Alienígena</label>
            </div>
            <div className="checkbox-group">
            <input type="checkbox" id="cor" name="frase" value="bonito"
            />
            <label htmlFor="cor">Bonito</label>
            </div>
            </div>
          
                <legend>Dê uma nota para seu professor:</legend>
            <div className="input-range">
                <label>O professor é top?</label>
                <input type="range" min="1" max="100" defaultValue="50"
                className="SatisfacaoGeral" id="SatisfacaoGeral" />
            </div>
           
                <button type="submit" className="botao-enviar">Enviar</button>
            </form> 
            </div>
        </div>  
        );
        
}

export default Formss;