import React, { useState, useEffect } from "react";

import CardCampanhasStyled from './style'
import Gato from '../../assets/gato.webp'

import ItemMusica from "../Campanhas/criarCampanha";



function CampanhaEditOng(props) {

  const meusItems = ['react', 'teste3', 'teste 4']



  const [nomeInput, setNomeInput] = useState(props.nome);
//   const [artistaInput, setArtistaInput] = useState(props.artista);
//   const [categoriaInput, setCategoriaInput] = useState(props.categoria);
//   const [anoInput, setAnoInput] = useState(props.ano);
//   const [imagemInput, setImagemInput] = useState(props.capa);





  return (


      <>
      

      <CardCampanhasStyled>


  <div className='cardCampanha divEspacoCardCampanha'>

<div className='divCapaCampanha'>
  <img src={Gato}></img>

</div>

 <div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>
    
   <input 
    defaultValue={nomeInput}
    onChange={(e) => setNomeInput(e.target.value)}
   ></input>
    
    Anjos da noite</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha botaoAtualizarCampanha'>Atualizar</button>
  <button className='botaoCardCampanha botaoExcluirCampanha'>Excluir</button>

  </div>
  

</div>
</div>


      </CardCampanhasStyled>
      
      
      
      
      </>
  )
}

export default CampanhaEditOng;