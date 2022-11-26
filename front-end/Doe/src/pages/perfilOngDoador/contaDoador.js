import { useState } from 'react';
import { Link } from 'react-router-dom';
import contaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import PerfilOngEstrutura from '../../components/PerfilOng/contaDoadorEstrutura';
import SecaoSobre from '../../components/PerfilOng/secaoSobre';

import React from 'react'

import { Header } from '../../components/Header/header';
import Campanha  from '../../components/Campanhas/campanha';


function contaDoador() {
  return (
   <>


  
  <contaOngEstrutura></contaOngEstrutura>
  <Campanha></Campanha>
   
   
   
   </>
  )
}

export default contaDoador;