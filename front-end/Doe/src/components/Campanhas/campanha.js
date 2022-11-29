import React from 'react'
import CardCampanhasStyled from './style';
import Gato from '../../assets/gato.webp'





export const Campanha = () => {
  return (
    

  <>
  
  
  <CardCampanhasStyled>


  <div className='music-boxes divEspacoCardCampanha'>

<div className='divCapaCampanha'>
  <img src={Gato}></img>

</div>

<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>anjos da noite</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
  

</div>
</div>


  </CardCampanhasStyled>
  
  
  </>

  )
}



export default Campanha;