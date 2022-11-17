import React from 'react';
import Contact from '../Atomos/Contact';
import Redes from '../Atomos/Redes';


const Footer= () => {

    
    return (
    
        <footer className='footer'>

            <div className='conteinerFooter'>

                <div className="contact">
                <Contact/>
                </div>

                <div className="redes">
                <Redes/>
                </div>
            </div>

        </footer>
    
    )
    };


export default Footer;