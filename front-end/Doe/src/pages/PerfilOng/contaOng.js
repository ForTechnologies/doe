import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import PerfilOngEstrutura from '../../components/PerfilOng/contaDoadorEstrutura';
import SecaoSobre from '../../components/PerfilOng/secaoSobre';

import React from 'react'

import Header from '../../components/Header/header';
import Campanha  from '../../components/Campanhas/campanha';
import CampanhaEditOng from '../../components/Campanhas/campanhaEditOng';

import CriarCampanha from '../../components/Campanhas/criarCampanha';
import contaOngEstruturaStyled from '../../components/PerfilOng/contaOngStyled';

function ContaOng() {
  return (
   <>

  <Header></Header>
  <ContaOngEstrutura></ContaOngEstrutura>
  <div className='divEspacoHeaderCampanha'>

  <CampanhaEditOng></CampanhaEditOng>
  
<div className='teste'> 
<button></button>
</div>
  
  </div>
   
   
   </>
  )
}

export default ContaOng;