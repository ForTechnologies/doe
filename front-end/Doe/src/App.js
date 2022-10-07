import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './styles/login.css'
import './global.css'
//import './components/Forms/style.css'
import './components/Forms/styleForms.js'
import './components/botoes/style'


//import containerLoginFoto from './assets/imgs-login/container-foto-login.png'
//mport { Circulo } from './components/botoes/index.js';



import Login from "./pages/Login/index.js";
import CadastroOng from "./pages/CadastroOng/index.js";
import CadastroDoador from "./pages/CadastroDoador/index.js";



function App() {
  return (
  
      <BrowserRouter>
      <Routes> 
        <Route exact element = { <Login /> }  path="/" />
          <Route element = { <CadastroDoador /> }  path="/cadastroDoador" />
          <Route element = { <CadastroOng /> }  path="/cadastroOng" />

          </Routes>
         
      </BrowserRouter> 
  );
}

 export default App;

