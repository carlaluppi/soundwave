import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Page1 from '../Componentes/Pages/Page1';
import Page2 from '../Componentes/Pages/Pag2';




const Router= () => { 
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Page1/>}/>
            <Route path="/discover" element= {<Page1/>}/>
            <Route path="/join" element= {<Page2/>}/>
        </Routes>
        </BrowserRouter>
    )

    }

export default Router;