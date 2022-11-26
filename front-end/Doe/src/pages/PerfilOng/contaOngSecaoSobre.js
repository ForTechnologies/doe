import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import PerfilOngEstrutura from '../../components/PerfilOng/contaDoadorEstrutura';
import SecaoSobre from '../../components/PerfilOng/secaoSobre';

import React from 'react'

import { Header } from '../../components/Header/header';
import Campanha  from '../../components/Campanhas/campanha';

import CriarCampanha from '../../components/Campanhas/criarCampanha';

function ContaOngSecaoSobre() {
  return (
   <>


  
  <ContaOngEstrutura></ContaOngEstrutura>
  <SecaoSobre></SecaoSobre>
  
   
   
   
   </>
  )
}

export default ContaOngSecaoSobre;