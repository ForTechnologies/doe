import { Link } from 'react-router-dom';
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import PerfilOngEstrutura from '../../components/PerfilOng/contaDoadorEstrutura';
import SecaoSobre from '../../components/PerfilOng/secaoSobre';

import React, { useState, useEffect } from "react";
import api from "../../api";


import Header from '../../components/Headeer/header';
import Campanha  from '../../components/Campanhas/campanha';
import CampanhaEditOng from '../../components/Campanhas/itemCampanhaEditOng';

import CriarCampanha from '../../components/Campanhas/criarCampanha';
import contaOngEstruturaStyled from '../../components/PerfilOng/contaOngStyled';

// import itemCampanhaEdit from '../../components/Campanhas/itemCampanhaEditOng'

function ContaOng() {

  const listaCampanhas = [];


  for (let index = 0; index < 10; index++) {
    listaCampanhas.push(index);
     
   }



  // useEffect(() => {
  //   api
  //     .get()
  //     .then((res) => {
  //       setListaCampanhas(res.data.reverse());
  //     })
  //     .catch((erro) => {
  //       console.log(erro);
  //     });
  // }, []);


  function deletarCampanha(index) {
    index = -1;

    // api
    //   .delete(`/${id}`)
    //   .then((resposta) => {
    //     setListaCampanhas(listaCampanhas.filter((campanha) => campanha.id !== id));
    //   })
    //   .catch((erro) => {
    //     alert("Erro ao deletar, procure ajuda");
    //   });
  }



  return (
   <>

  <Header></Header>
  <ContaOngEstrutura></ContaOngEstrutura>
  <div className='divEspacoHeaderCampanha'>


  <div className="container">

<div className="music-boxes">

  {listaCampanhas.map((campanha) => (
    <CampanhaEditOng
      key={campanha.id}
      titulo={campanha.titulo}
      descricao={campanha.descricao}
      capa={campanha.imagem}
      id={campanha.id}
      funcaoDeletar={deletarCampanha}
    />
  ))}


</div>
</div>




 
  
<div className='teste'> 
<button>aaaa</button>
</div>
  
  </div>
   
   
   </>
  )
}

export default ContaOng;