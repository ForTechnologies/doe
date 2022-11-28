import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/login.css'
import './global.css'
import './components/Forms/styleForms.js'
import './components/botoes/style'
import { Header } from './components/Headeer/header';
import Routes from './Routes';



// import Login from "./pages/Login/index.js";
// import CadastroOng from "./pages/CadastroOng/index.js";
// import CadastroDoador from "./pages/CadastroDoador/index.js";
// import Teste from "./pages/teste/teste.js";

// import PerfilOng from './pages/perfilOngDoador/contaDoador';


function App() {
  return (

<BrowserRouter>
<Routes></Routes>

</BrowserRouter>
  
  );
}

 export default App;

