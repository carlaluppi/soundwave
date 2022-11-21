import React from 'react';
import Contact from '../Atomos/Contact';
import Redes from '../Atomos/Redes';


const Footer= () => {

    
    return (
    
        <footer className='footer'>

            <div className='conteiner1'>
                <Contact/>              
            </div>

            <div className="conteiner2">
                <Redes/>
            </div>

        </footer>
    
    )
    };


export default Footer;