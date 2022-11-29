import React from 'react'
import { Routes , Route } from 'react-router-dom'



import PerfilOngDoador from './pages/perfilOngDoador/contaDoador';

import PerfilOng from './pages/PerfilOng/contaOngSecaoSobre'
import PerfilOngCampanha from './pages/PerfilOng/contaOng'

import ContaOngAdicionarCampanha from './pages/PerfilOng/contaOngAdicionarCampanha'
import ContaOngTelaConfig from './pages/PerfilOng/contaOngEditarDados'
import { ContaAtualizarCampanha } from './pages/PerfilOng/contaOngAtualizarCampanha';

import CadastroDoador from './pages/CadastroDoador/index';
import CadastroOng from './pages/CadastroOng/index'
import Login from './pages/Login/index';
import Home from './pages/Home/index'

import ProcurarCampanhas from "./pages/Campanhas/Campanhas"
import ProcurarComunidades from "./pages/Comunidades/comunidades"






export default () => {
  return (

    <>
    
    <Routes>


    <Route exact path="/" element={<Home />}>
     </Route> 
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
     <Route exact path="/EditarDadosOng" element={<ContaOngTelaConfig />}>
     </Route>
     <Route exact path="/ProcurarCampanhas" element={<ProcurarCampanhas />}>
     </Route>
     <Route exact path="/ProcurarComunidades" element={<ProcurarComunidades />}>
     </Route>
     <Route exact path="/atualizarCampanha/:id" element={<ContaAtualizarCampanha />}></Route>


    </Routes>
    
    
    
    
    
    </>
   
  );
}

