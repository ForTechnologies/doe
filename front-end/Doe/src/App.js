import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./styles/login.css";
import "./global.css";
import "./components/Forms/styleForms.js";
import "./components/botoes/style";

import PerfilOngDoador from "./pages/perfilOngDoador/contaDoador";
import PerfilOng from "./pages/PerfilOng/contaOngSecaoSobre";
import PerfilOngCampanha from "./pages/PerfilOng/contaOng";
import ContaOngAdicionarCampanha from "./pages/PerfilOng/contaOngAdicionarCampanha";
import ContaOngTelaConfig from "./pages/PerfilOng/contaOngEditarDados";
import { ContaAtualizarCampanha } from "./pages/PerfilOng/contaOngAtualizarCampanha";
import ProcurarCampanhas from "./pages/Campanhas/Campanhas.js";
import ProcurarComunidades from "./pages/Comunidades/comunidades";

import Login from "./pages/Login/index.js";
import CadastroOng from "./pages/CadastroOng/index.js";
import CadastroDoador from "./pages/CadastroDoador/index.js";
import { Home } from "./pages/Home";
import { Geolocalizacao } from "./pages/Geolocalizacao";
import { Doacao } from "./pages/Doacao";
import { Voluntario } from "./pages/Voluntario";
import { Contato } from "./pages/Contato";
import { InformacoesDoacao } from "./pages/InformacoesDoacao";


import FormularioDoacao from './components/FormularioDoacao/FormularioDoacao.jsx'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element = { <Login /> }  path="/login" /> */}
        <Route element={<Geolocalizacao />} path="/geolocalizacao" />
        <Route element={<Doacao />} path="/doar" />
        <Route element={<InformacoesDoacao />} path="/dados-doacao" />
        <Route element={<Voluntario />} path="/voluntario" />
        <Route element={<Contato />} path="/contato" />
        {/* <Route element = { <CadastroDoador /> }  path="/cadastroDoador" />
          <Route element = { <CadastroOng /> }  path="/cadastroOng" /> */}

        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route
          exact
          path="/CadastroDoador"
          element={<CadastroDoador />}
        ></Route>
        <Route exact path="/CadastroOng" element={<CadastroOng />}></Route>
        <Route
          exact
          path="/PerfilOngDoador"
          element={<PerfilOngDoador />}
        ></Route>
        <Route exact path="/PerfilOng" element={<PerfilOng />}></Route>
        <Route
          exact
          path="/PerfilOngCampanha"
          element={<PerfilOngCampanha />}
        ></Route>
        <Route
          exact
          path="/ContaOngAdicionarCampanha"
          element={<ContaOngAdicionarCampanha />}
        ></Route>
        <Route
          exact
          path="/EditarDadosOng"
          element={<ContaOngTelaConfig />}
        ></Route>
        <Route
          exact
          path="/ProcurarCampanhas"
          element={<ProcurarCampanhas />}
        ></Route>
        <Route
          exact
          path="/ProcurarComunidades"
          element={<ProcurarComunidades />}
        ></Route>
        <Route
          exact
          path="/atualizarCampanha/:id"
          element={<ContaAtualizarCampanha />}
        ></Route>


          <Route
          exact
          path="/formularioDoacao"
          element={<FormularioDoacao />}
        ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
