import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './styles/login.css'
import './global.css'
import './components/Forms/styleForms.js'
import './components/botoes/style'


import Login from "./pages/Login/index.js";
import CadastroOng from "./pages/CadastroOng/index.js";
import CadastroDoador from "./pages/CadastroDoador/index.js";
import { Home } from './pages/Home';
import { Geolocalizacao } from './pages/Geolocalizacao';
import { Doacao } from './pages/Doacao'
import { Voluntario } from './pages/Voluntario'
import { Contato } from './pages/Contato'
import { InformacoesDoacao } from './pages/InformacoesDoacao'
function App() {
  return (
  
      <BrowserRouter>
      <Routes> 
        {/* <Route exact element = { <Teste /> }  path="/" /> */}
        <Route exact element = { <Home /> }  path="/" />
          <Route element = { <Login /> }  path="/login" />
          <Route element = { <Geolocalizacao /> }  path="/geolocalizacao" />
          <Route element = { <Doacao /> }  path="/doar" />
          <Route element = { <InformacoesDoacao /> }  path="/dados-doacao" />
          <Route element = { <Voluntario /> }  path="/voluntario" />
          <Route element = { <Contato /> }  path="/contato" />
          <Route element = { <CadastroDoador /> }  path="/cadastroDoador" />
          <Route element = { <CadastroOng /> }  path="/cadastroOng" />
          </Routes>
         
      </BrowserRouter> 
  );
}

 export default App;

