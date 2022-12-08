import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './styles/login.css'
import './global.css'
import './components/Forms/styleForms.js'
import './components/botoes/style'
import { Header } from './components/Headeer/header';
// import { Routes , Route } from 'react-router-dom'



// import Login from "./pages/Login/index.js";
// import CadastroOng from "./pages/CadastroOng/index.js";
// import CadastroDoador from "./pages/CadastroDoador/index.js";
import { Geolocalizacao } from './pages/Geolocalizacao';
import { Doacao } from './pages/Doacao'
import { Voluntario } from './pages/Voluntario'
import { Contato } from './pages/Contato'
import { InformacoesDoacao } from './pages/InformacoesDoacao'





import PerfilOngDoador from './pages/perfilOngDoador/contaDoador';

import PerfilOng from './pages/PerfilOng/contaOngSecaoSobre'
import PerfilOngCampanha from './pages/PerfilOng/contaOng'

import ContaOngAdicionarCampanha from './pages/PerfilOng/contaOngAdicionarCampanha'
import ContaOngTelaConfig from './pages/PerfilOng/contaOngEditarDados'
import { ContaAtualizarCampanha } from './pages/PerfilOng/contaOngAtualizarCampanha';

import CadastroDoador from './pages/CadastroDoador/index';
import CadastroOng from './pages/CadastroOng/index'
import Login from './pages/Login/index';
import Home from './pages/Home.jsx'

import ProcurarCampanhas from "./pages/Campanhas/Campanhas.js"
import ProcurarComunidades from "./pages/Comunidades/comunidades"



// import Login from "./pages/Login/index.js";
// import CadastroOng from "./pages/CadastroOng/index.js";
// import CadastroDoador from "./pages/CadastroDoador/index.js";
// import Teste from "./pages/teste/teste.js";

// import PerfilOng from './pages/perfilOngDoador/contaDoador';



function App() {
  return (


      <BrowserRouter>
      <Routes> 
          {/* <Route element = { <Login /> }  path="/login" /> */}
          <Route element = { <Geolocalizacao /> }  path="/geolocalizacao" />
          <Route element = { <Doacao /> }  path="/doar" />
          <Route element = { <InformacoesDoacao /> }  path="/dados-doacao" />
          <Route element = { <Voluntario /> }  path="/voluntario" />
          <Route element = { <Contato /> }  path="/contato" />
          {/* <Route element = { <CadastroDoador /> }  path="/cadastroDoador" />
          <Route element = { <CadastroOng /> }  path="/cadastroOng" /> */}

          

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
         
      </BrowserRouter> 
  );
}

 export default App;

