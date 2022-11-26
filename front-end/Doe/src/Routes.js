import React from 'react'
import { Routes , Route } from 'react-router-dom'


import Teste from './pages/teste/teste'
import PerfilOngDoador from './pages/perfilOngDoador/contaDoador';

import PerfilOng from './pages/PerfilOng/contaOngSecaoSobre'
import PerfilOngCampanha from './pages/PerfilOng/contaOng'

import ContaOngAdicionarCampanha from './pages/PerfilOng/contaOngAdicionarCampanha'

import CadastroDoador from './pages/CadastroDoador/index';
import CadastroOng from './pages/CadastroOng/index'
import Login from './pages/Login/index';

export default () => {
  return (

    <>
    
    <Routes>



     <Route exact path="/Login" element={<Login />}>
     </Route>

     <Route exact path="/CadastroDoador" element={<CadastroDoador />}>
     </Route>

     <Route exact path="/CadastroOng" element={<CadastroOng />}>
     </Route>




     <Route exact path="/PerfilOngDoador" element={<PerfilOngDoador />}>
      </Route>


     <Route exact path="/PerfilOng" element={<PerfilOng />}>
     </Route>

     <Route exact path="/PerfilOngCampanha" element={<PerfilOngCampanha />}>
     </Route>

     <Route exact path="/ContaOngAdicionarCampanha" element={<ContaOngAdicionarCampanha />}>
     </Route>



    </Routes>
    
    
    
    
    
    </>
   
  );
}

